import { css } from '@microsoft/fast-element';

export const FileUploadStyles = css`
  .upload-rectangule {
    width: 100%;
    height: 210px;
    padding: 16px;
    border: 1px dashed rgb(255 255 255 / 27%);
    background-color: rgb(242 35 100 / 0%);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .title {
    margin-bottom: 0;
    font-size: 13px;
  }

  .file {
    margin-top: 0;
    font-size: 13px;
    color: rgb(241 241 241 / 51%);
    text-align: center;
  }

  zero-button {
    width: 119px;
    height: 30px;
    display: flex;
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 0.05);
    box-sizing: border-box;
    font-family: Roboto-Regular, Roboto, sans-serif;
    color: rgb(183, 126, 255);
    align-items: center;
  }
`;
