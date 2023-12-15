import {html, ref} from '@microsoft/fast-element';
import type {Reconciler} from './reconciler';


export const ReconcilerTemplate = html<Reconciler>`
    <zero-card style="display: flex">
        <zero-card style="width: 10%">
            <div>
                <p>Add first File here</p>
                <upload-file ${ref('firstFile')}></upload-file>
            </div>
            <div>
                <p>Add second file here</p>
                <upload-file ${ref("secondFile")}></upload-file>
            </div>
            <zero-button @click=${(x) => x.uploadAndRecon()}>Reconcile</zero-button>        
        </zero-card>
        <zero-card style="width: 45%">
            <zero-grid-pro ${ref('fGrid')}
                           @onGridReady=${(x) => x.onGridReady(1)}
            ></zero-grid-pro>
        </zero-card>
        <zero-card style="width: 45%">
            <zero-grid-pro ${ref('sGrid')}
                           @onGridReady=${(x ) => x.onGridReady(2)}></zero-grid-pro>
        </zero-card>
    </zero-card>
`;
