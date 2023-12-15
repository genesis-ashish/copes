/**
 * System              : Genesis Business Library
 * Sub-System          : multi-pro-code-test Configuration
 * Version             : 1.0
 * Copyright           : (c) Genesis
 * Date                : 2022-03-18
 * Function : Provide table definition config for multi-pro-code-test.
 *
 * Modification History
 */

tables {

    table(name = "APPLICATIONS", id = 2000, audit=details(id=2001, sequence="AR", tsKey = true)){
        sequence(APP_ID, "AR")
        APP_NAME not null
        APP_DESCRIPTION not null
        APP_ICON not null
        APP_STATUS
        APP_INSTALLED_DATE
        APP_VERSION
        APP_CONFIGURATION not null
        APP_INFO not null
        primaryKey {
            APP_ID
        }
    }

    table(name="TEMPLATES", id=2002){
        sequence(TEMPLATE_ID, "TE")
        TEMPLATE_NAME not null
        TEMPLATE_DESCRIPTION not null
        TEMPLATE_VERSION
        TEMPLATE_ROUTE_NAME
        primaryKey {
            TEMPLATE_ID
        }
    }

    table(name="WORKFLOW", id = 2003) {
        sequence(WORKFLOW_ID, "WF")
        WORKFLOW_NAME not null
        WORKFLOW_DATE_CREATED
        WORKFLOW_CREATED_BY

        primaryKey {
            WORKFLOW_ID
        }
    }

    table(name="WORKFLOW_STEP", id  = 2004) {
        sequence(WORKFLOW_STEP_ID, "WS")
        WORKFLOW_STEP_TEXT not null
        WORKFLOW_STEP_NAME not null
        WORKFLOW_STEP_REQUIRES_APPROVAL
        WORKFLOW_ID not null

        primaryKey {
            WORKFLOW_STEP_ID
        }
    }

}
