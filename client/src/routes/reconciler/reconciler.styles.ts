import {css} from '@microsoft/fast-element';
import {mixinScreen} from '../../styles';

export const ReconcilerStyles = css`
  :host {
    ${mixinScreen('flex')}

    align-items: center;
    justify-content: center;
  }
  
  .highlight-difference{
    background-color: red;
  }
`;
