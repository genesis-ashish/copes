import { customElement, DOM, FASTElement, observable } from '@microsoft/fast-element';
import { FileUploadTemplate as template } from './file-upload.template';
import { FileUploadStyles as styles } from './file-upload.styles';
import { logger } from '@genesislcap/foundation-comms';

const name = 'upload-file';

@customElement({
  name,
  template,
  styles,
})
export class FileUpload extends FASTElement {
  @observable fileName: string;

  public fileSelect: HTMLInputElement;
  public dropArea: HTMLDivElement;
  public endpoint: string = '';

  private file: any;

  public connectedCallback() {
    super.connectedCallback();
    logger.debug(`${name} is now connected to the DOM`);
    DOM.queueUpdate(() => {
      this.createFileUploadInput();

      ['dragenter', 'dragover', 'dragleave', 'drop'].forEach((eventName) => {
        this.dropArea.addEventListener(eventName, this.preventDefaults, false);
      });
      this.dropArea.addEventListener('drop', this.handleDrop.bind(this), false);
    });
  }

  public setEndpoint(endpoint: string) {
    this.endpoint = endpoint;
  }

  public fileClick() {
    this.fileSelect.click();
  }

  public getCurrentFile() {
    return this.file;
  }

  private preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  private handleDrop(e) {
    const dt = e.dataTransfer;
    const files = dt.files;

    if (
      files[0] &&
      (files[0].type === 'text/csv' ||
        files[0].type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
    ) {
      const file = files[0];
      this.updateSelectedFile(file);
    }
  }

  private createFileUploadInput() {
    this.fileSelect = document.createElement('input') as HTMLInputElement;
    this.fileSelect.type = 'file';
    this.fileSelect.accept =
      '.csv,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
    this.fileSelect.onchange = (event) => {
      logger.debug('file upload click');
      this.fileSelected(event);
    };
  }

  private fileSelected(event) {
    // Only take the first file
    const file = event.target.files[0];
    this.updateSelectedFile(file);
  }

  private updateSelectedFile(file: any) {
    this.file = file;
    this.fileName = this.file.name;
    this.fileSelect.value = '';
    this.$emit('fileSelected', file);
  }

  public cleanData() {
    this.file = undefined;
    this.fileName = undefined;
    this.fileSelect.value = '';
  }
}
