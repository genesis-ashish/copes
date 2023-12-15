import {customElement, FASTElement, html, ref} from "@microsoft/fast-element";
import {Button} from "@genesislcap/foundation-zero";

export const fileUploadTemplate = html<FileUpload>`
    <template>
        <zero-button ${ref('uploadButton')} @change="${(x) => x.uploadFile()}">Upload File</zero-button>
    </template>
`;

@customElement(
    {
        name:'file-upload',
        template: fileUploadTemplate,
    }
)
export class FileUpload extends FASTElement{
    uploadButton: Button

    uploadFile(){
        console.log('uploading file')
    }
}
