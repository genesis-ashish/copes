import {customElement, FASTElement, observable} from '@microsoft/fast-element';
import { workflowTemplate as template } from './workflow.template';
import { workflowStyles as styles } from './workflow.styles';
import {Connect} from "@genesislcap/foundation-comms";
import {Route} from "@microsoft/fast-router";

export interface WorkflowStep {
    copyText: string;
    name: string;
    approvalRequired: boolean;
    approved: boolean;
}

@customElement({
    name: 'workflow-route',
    template,
    styles,
})
export class Workflow extends FASTElement {

    @observable workflowSteps: WorkflowStep[];

    @observable workflowName: string;

    @observable submitted: boolean;

    @observable loaded: boolean;

    workflowId: string;

    @Connect connect!: Connect;

    public async connectedCallback() {
        super.connectedCallback();
        const data = await this.connect.snapshot(
            'WORKFLOW_STEPS',
            { CRITERIA_MATCH: `WORKFLOW_ID == "${this.workflowId}"` }

        );
        this.workflowSteps = this.createWorkflowSteps(data.ROW);
        this.workflowName = this.getWorkflowName(data.ROW);
        this.loaded = true;
    }

    submitWorkflow(): void {
        this.submitted = true;
    }

    goHome(): void {
        Route.path.push(`/home`);
    }

    handleApprovedChanged(): void {
        this.workflowSteps = [...this.workflowSteps];
    }

    private createWorkflowSteps(rowData: any[]): WorkflowStep[] {

        if (!rowData) {
            return null;
        }

        return rowData.map(r => ({
            copyText: r.WORKFLOW_STEP_NAME,
            name: r.WORKFLOW_STEP_TEXT,
            approvalRequired: r.WORKFLOW_STEP_REQUIRES_APPROVAL,
            approved: false
        }))
    }

    private getWorkflowName(rowData: any[]): string {

        if (!rowData) {
            return null;
        }
        return rowData[0].WORKFLOW_NAME;
    }
}