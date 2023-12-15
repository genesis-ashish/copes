import {customElement, FASTElement, html, observable, ref, when} from "@microsoft/fast-element";
import { WorkflowStep } from "../routes/workflow/workflow";
import {Checkbox} from "@genesislcap/foundation-ui";


@customElement({
    name: 'workflow-step',
    template: html<WorkflowStepRenderer>`
      <h2>${x => x.step.name}</h2>
        <p>${ x => x.step.copyText} </p>
    
        ${when(x => x.step.approvalRequired, html<WorkflowStepRenderer>`
            <zero-checkbox ${ref('approved')} :value=${x => x.step.approved} @change="${x => x.handleCheckboxChanged()}">Approve</zero-checkbox>
        `)}
    `,
    styles: '',
})
export class WorkflowStepRenderer extends FASTElement {
    @observable step: WorkflowStep

    approved: Checkbox;

    handleCheckboxChanged():void  {
        this.step.approved = this.approved.checked;
    }

}