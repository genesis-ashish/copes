import { html, ViewTemplate, when, ref } from '@microsoft/fast-element';
import type { FileUpload } from './file-upload';
import { sync } from '@genesislcap/foundation-utils';
import { fileUploadIcon } from '../../styles/icons';

export const FileUploadTemplate: ViewTemplate<FileUpload> = html`
  <div class="upload-rectangule" ${ref('dropArea')}>
    <p class="title">Upload Excel or CSV</p>
    ${when(
      (x) => !x.fileName,
      html`
        <p class="file">Drag and drop file here or select to upload</p>
      `,
    )}
    ${when(
      (x) => x.fileName,
      html`
        <p class="file">${sync((x) => x.fileName)}</p>
      `,
    )}
    <zero-button appearance="tab-primary" @click=${(x) => x.fileClick()}>
      ${fileUploadIcon('start')} Choose file
    </zero-button>
  </div>
`;
