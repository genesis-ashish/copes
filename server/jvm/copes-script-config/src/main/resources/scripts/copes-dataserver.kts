/**
 * System              : Genesis Business Library
 * Sub-System          : multi-pro-code-test Configuration
 * Version             : 1.0
 * Copyright           : (c) Genesis
 * Date                : 2022-03-18
 * Function : Provide dataserver config for multi-pro-code-test.
 *
 * Modification History
 */
dataServer {
    query("ALL_APPLICATIONS", APPLICATIONS)
    query("ALL_APPLICATIONS_AUDIT", APPLICATIONS_AUDIT)
    query("ALL_TEMPLATES", TEMPLATES)
    query("ALL_WORKFLOWS", WORKFLOW)
    query("ALL_WORKFLOW_STEPS", WORKFLOW_STEP)
    query("WORKFLOW_STEPS", WORKFLOW_STEPS)
}
