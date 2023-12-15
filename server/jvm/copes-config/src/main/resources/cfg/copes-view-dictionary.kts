/**
 * System              : Genesis Business Library
 * Sub-System          : multi-pro-code-test Configuration
 * Version             : 1.0
 * Copyright           : (c) Genesis
 * Date                : 2022-03-18
 * Function : Provide view config for multi-pro-code-test.
 *
 * Modification History
 */
views {

    view("WORKFLOW_STEPS", WORKFLOW_STEP) {
        joins {
            joining(WORKFLOW, backwardsJoin = true) {
                on(WORKFLOW_STEP.WORKFLOW_ID to WORKFLOW { WORKFLOW_ID })
            }
        }

        fields {
            WORKFLOW_STEP.WORKFLOW_STEP_NAME
            WORKFLOW_STEP.WORKFLOW_STEP_TEXT
            WORKFLOW_STEP.WORKFLOW_STEP_REQUIRES_APPROVAL
            WORKFLOW.WORKFLOW_NAME
            WORKFLOW.WORKFLOW_DATE_CREATED
            WORKFLOW.WORKFLOW_CREATED_BY
            WORKFLOW.WORKFLOW_ID
        }
    }
}
