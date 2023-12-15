/**
 * System              : Genesis Business Library
 * Sub-System          : multi-pro-code-test Configuration
 * Version             : 1.0
 * Copyright           : (c) Genesis
 * Date                : 2022-03-18
 * Function : Provide event handler config for multi-pro-code-test.
 *
 * Modification History
 */
eventHandler {
    eventHandler <Applications>(name="APPLICATION_INSERT") {
        onCommit { event ->
            val application = event.details
            entityDb.insert(application)
            ack()
        }
    }

    eventHandler <Applications>(name="APPLICATION_UPDATE") {
        onCommit { event ->
            val application = event.details
            entityDb.modify(application)
            ack()
        }
    }

    eventHandler <Applications>(name="APPLICATION_DELETE") {
        onCommit { event ->
            val application = event.details
            entityDb.delete(application)
            ack()
        }
    }

    eventHandler <Workflow>(name="WORKFLOW_INSERT") {
        onCommit { event ->
            val application = event.details
            entityDb.insert(application)
            ack()
        }
    }

    eventHandler <Workflow>(name="WORKFLOW_UPDATE") {
        onCommit { event ->
            val application = event.details
            entityDb.modify(application)
            ack()
        }
    }

    eventHandler <Workflow>(name="WORKFLOW_DELETE") {
        onCommit { event ->
            val application = event.details
            entityDb.delete(application)
            ack()
        }
    }

    eventHandler <WorkflowStep>(name="WORKFLOW_STEP_INSERT") {
        onCommit { event ->
            val application = event.details
            entityDb.insert(application)
            ack()
        }
    }

    eventHandler <WorkflowStep>(name="WORKFLOW_STEP_UPDATE") {
        onCommit { event ->
            val application = event.details
            entityDb.modify(application)
            ack()
        }
    }

    eventHandler <WorkflowStep>(name="WORKFLOW_STEP_DELETE") {
        onCommit { event ->
            val application = event.details
            entityDb.delete(application)
            ack()
        }
    }
}
