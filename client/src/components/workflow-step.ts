import {customElement, FASTElement, html, observable, when} from "@microsoft/fast-element";
import { WorkflowStep } from "../routes/workflow/workflow";


@customElement({
    name: 'workflow-step',
    template: html<WorkflowStepRenderer>`
      <h2>${x => x.step.name}</h2>
        <p>${ x => x.step.copyText} </p>
    
        ${when(x => x.step.approvalRequired, html<WorkflowStepRenderer>`
            <zero-checkbox :value=${x => x.step.approved} @change="${(x, c) => x.handleApprovedChanged((c.event.target as HTMLInputElement).checked)}}">Approve</zero-checkbox>
        `)}
    `,
})
export class WorkflowStepRenderer extends FASTElement {
    @observable step: WorkflowStep;

    handleApprovedChanged(approved: boolean): void {
        this.step.approved = approved;
        this.$emit('approvedChanged');
    }
}