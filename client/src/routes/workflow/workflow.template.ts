import {Workflow, WorkflowStep} from "./workflow";
import {html, repeat, when} from "@microsoft/fast-element";

const getStepLabel = (step: WorkflowStep, context): string => {
    return `Step ${context.index + 1} - ${step.name}`
}

const getStepsValid = (workflow: Workflow) => workflow.workflowSteps.map((s, index) => (
    {
        isValid: () => {
            return s.approvalRequired ? workflow.workflowSteps[index].approved : true;
        }
    }
  )
);

export const workflowTemplate = html<Workflow>`
        
    <div class="workflow">
        <h1>${x => x.workflowName}</h1>
        ${when(x => x.workflowSteps, html<Workflow>`
            <div class="workflow__stepper">
                <zero-stepper
                        :validation=${(x) => getStepsValid(x)}
                >
                    ${repeat((workflow) => workflow.workflowSteps, html<WorkflowStep>`
                        <zero-stepper-tab>${(step, c) => getStepLabel(step, c)}</zero-stepper-tab>
                    `, { positioning: true })}
                    ${repeat((step) => step.workflowSteps, html<WorkflowStep>`
                        <zero-stepper-tab-panel>
                            <workflow-step :step="${x => x}"></workflow-step>
                        </zero-stepper-tab-panel>
                    `,
                    )}
                </zero-stepper>
            </div>
                
        `)}
    </div>
`