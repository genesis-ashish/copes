import {css} from "@microsoft/fast-element";

export const workflowStyles = css`
    
    .workflow {
      display: flex;
      height: 100%;
      width: 100%;
      flex-direction: column;
    }

      .loading-spinner-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
  
  
    h1 {
      padding: 20px;
      margin: 0;
    }
  
    .workflow__stepper {
      flex: 1;
    }
`