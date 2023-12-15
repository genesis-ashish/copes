import {Workflow, WorkflowStep} from "./workflow";
import {html, repeat, when} from "@microsoft/fast-element";

const getStepLabel = (step: WorkflowStep, zeroBasedIndex: number): string => {
    return `Step ${zeroBasedIndex + 1} - ${step.name}`
}

const getStepsValid = (workflow: Workflow): { isValid: () => boolean }[] => workflow.workflowSteps.map((s) => (
    {
        isValid: () => {
            return s.approvalRequired ? s.approved : true;
        }
    }
  )
);

export const workflowTemplate = html<Workflow>`
        
    <div class="workflow">
        ${when(x => !x.loaded, html`
        <div class="loading-spinner-container">
          <zero-progress-ring></zero-progress-ring>
        </div>
      `)}
        
        <h1>${x => x.workflowName}</h1>
        ${when(x => x.loaded && !x.submitted && x.workflowSteps, html<Workflow>`
            <div class="workflow__stepper">
                <zero-stepper
                        :validation=${(x) => getStepsValid(x)}
                        @submit=${x => x.submitWorkflow()}
                >
                    ${repeat((workflow) => workflow.workflowSteps, html<WorkflowStep>`
                        <zero-stepper-tab>${(step, c) => getStepLabel(step, c.index)}</zero-stepper-tab>
                    `, { positioning: true })}
                    ${repeat((step) => step.workflowSteps, html<WorkflowStep>`
                        <zero-stepper-tab-panel>
                            <workflow-step :step="${x => x}" @approvedChanged="${(x, ctx) => ctx.parent.handleApprovedChanged()}"></workflow-step>
                        </zero-stepper-tab-panel>
                    `,
                    )}
                </zero-stepper>
            </div>
                
        `)}
        
        ${when(x => x.loaded && !x.submitted && !x.workflowSteps, html<Workflow>`
            <p>There are no steps for this workflow id</p>
            <zero-button @click="${x => x.goHome()}">Go to admin</zero-button>
        `)}
        
        ${when(x => x.submitted, html<Workflow>`
            <p>
                Workflow submitted successfully.
            </p>
            <zero-button @click="${x => x.goHome()}">Go to admin</zero-button>
        `)}
    </div>
`