import {customElement, FASTElement, observable} from '@microsoft/fast-element';
import {ReconcilerTemplate as template} from './reconciler.template';
import {ReconcilerStyles as styles} from './reconciler.styles';
import {logger} from '../../utils';
import {FileUpload} from "../../components/file-upload/file-upload";
import {GridPro} from "@genesislcap/foundation-zero-grid-pro";

const name = 'reconciler-route';

@customElement({
    name,
    template,
    styles,
})
export class Reconciler extends FASTElement {
    @observable public firstFile!: FileUpload
    @observable public secondFile!: FileUpload
    fGrid: GridPro
    sGrid: GridPro
    gridApiInitializedCount =0



    public connectedCallback() {
        super.connectedCallback();
        logger.debug(`${name} is now connected to the DOM`);
    }

    async uploadAndRecon(){
        console.log('uploading and reconciling the files')
        const fFile = this.firstFile.getCurrentFile();
        const sFile = this.secondFile.getCurrentFile();
        await this.readAndParseFile(fFile).then(r => this.initializeGrid(this.fGrid, r));
        await this.readAndParseFile(sFile).then(s => this.initializeGrid(this.sGrid, s));
    }

    private initializeGrid(fGrid: GridPro, r: string[][]) {
        if(r.length > 0){
            const headers = r[0];
            const colDef = headers? headers.map((header) => ({
                headerName: header, field: header
            })):[];
            const rowData = r.slice(1).map(
                (row) => {
                    const rowObject: {[key: string]: string}={};
                    colDef.forEach((colDef) => {
                        const header = colDef.field;
                        rowObject[header] = row[headers.indexOf(header)];
                    });
                    return rowObject;
                });
            fGrid.gridOptions = {
                defaultColDef:{
                    resizable:true,
                    filter: true
                },
                columnDefs: colDef,
                rowData: rowData,
                getRowStyle: (params) => {
                    if(params.node.key  === 'marked'){
                        return {
                            backgroundColor: 'red',
                        }
                    }
                }
            }
        }
    }



     async readAndParseFile(file: File):Promise<string[][]> {
        return new Promise<string[][]>((resolve, reject) => {
            const reader = new FileReader();

            // Set up a callback for when the file reading is complete
            reader.onload = (event) => {
                // event.target.result contains the content of the file as a string
                const fileContent = event.target?.result as string;

                // Parse CSV content into a 2D array
                const rows = this.parseCSV(fileContent);
                resolve(rows);
            };

            // Set up a callback for errors during file reading
            reader.onerror = (event) => {
                reject(new Error('Error reading the file.'));
            };

            // Read the file content as text
            reader.readAsText(file);
        });
    }

    private parseCSV(csvContent: string): string[][] {
        return csvContent.split('\n').map((row) => row.split(','));
    }
    findDifferences(){
            console.log('finding differences')
            const g1d = this.getGridData(this.fGrid.gridApi);
            const g2d = this.getGridData(this.sGrid.gridApi);
            console.log('g1d',g1d)
            console.log('g2d',g2d)
            g1d.forEach((row1, index) => {
                const row2 = g2d[index]
                if(this.compareRow(row1.data, row2.data) === true){
                    console.log("different rows are ",row1.id,  " and ",row2.id)
                    this.fGrid.gridApi.getRowNode(row1.id).key = 'marked'
                    this.sGrid.gridApi.getRowNode(row2.id).key = 'marked'
                }
            });
            this.fGrid.gridApi.redrawRows()
            this.sGrid.gridApi.redrawRows()
    }

    private getGridData(gridApi: any): any[]{
        const rowData = [];
        gridApi.forEachNode((node: any) => rowData.push(node))
        return rowData;
    }

    private compareRow(data1: any, data2: any) {
            return Object.keys(data1).some((key) => data1[key] != data2[key]);
    }
    onGridReady(gridNumber: number) {
        if(gridNumber === 1){
            this.gridApiInitializedCount++
            console.log(this.fGrid.gridApi)
        }
        else if(gridNumber === 2){
            this.gridApiInitializedCount++
            console.log(this.fGrid.gridApi)
        }
        if(this.gridApiInitializedCount === 2){
            this.findDifferences()
        }
    }
}
