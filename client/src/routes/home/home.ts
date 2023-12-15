import { customElement, FASTElement } from '@microsoft/fast-element';
import { HomeTemplate as template } from './home.template';
import { HomeStyles as styles } from './home.styles';
import {UiSchema, UiSchemaElement} from "@genesislcap/foundation-forms";

const workflowNameControl: UiSchemaElement = {
  type: 'Control',
  label: 'Step name',
  scope: '#/properties/WORKFLOW_STEP_NAME',
};

const workflowTextControl: UiSchemaElement = {
  type: 'Control',
  label: 'Step text',
  scope: '#/properties/WORKFLOW_STEP_TEXT',
};

const workflowRequiresApprovalControl: UiSchemaElement = {
  type: 'Control',
  label: 'Requires approval',
  scope: '#/properties/WORKFLOW_STEP_REQUIRES_APPROVAL',
};


const workflowIdControl: UiSchemaElement = {
  type: 'Control',
  label: 'Workflow name',
  scope: '#/properties/WORKFLOW_ID',
  options: {
    allOptionsResourceName: "ALL_WORKFLOWS",
    valueField: "WORKFLOW_ID",
    labelField: "WORKFLOW_NAME",
    data: null,
  }
};

@customElement({
  name: 'home-route',
  template,
  styles,
})
export class Home extends FASTElement {
  constructor() {
    super();
  }

  workflowStepUISchema: UiSchema = {
    type: 'VerticalLayout',
    elements: [
      workflowIdControl,
      workflowNameControl,
      workflowTextControl,
      workflowRequiresApprovalControl
    ]
  }

}
