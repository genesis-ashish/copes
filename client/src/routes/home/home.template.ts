import { html } from '@microsoft/fast-element';
import type { Home } from './home';
import {Route} from "@microsoft/fast-router";
import {GridProRendererTypes} from "@genesislcap/foundation-zero-grid-pro";

export const workflowColumns = [
    {field: 'WORKFLOW_ID', headerName: 'Workflow id'},
    {field: 'WORKFLOW_NAME', headerName: 'Name'},
    {field: 'WORKFLOW_DATE_CREATED', headerName: 'Date created'},
    {field: 'WORKFLOW_CREATED_BY', headerName: 'Created by'},
    {
        field: 'View workflow',
        headerName: 'View workflow',
        cellRenderer: GridProRendererTypes.action,
        cellRendererParams: {
            actionClick: (rowData) => {
                Route.path.push(`/workflow/${rowData.WORKFLOW_ID}`);
            },
            actionName: 'View workflow',
            appearance: 'secondary-orange',
        }
    }
];

export const HomeTemplate = html<Home>`
  <!-- insert template code here -->
  <zero-layout>
      <zero-layout-region type="vertical" >
              <zero-layout-region type="horizontal" size="60%">
                  <zero-layout-item title="Application Administration" size="40%">
                      <entity-management
                              resourceName="ALL_APPLICATIONS"
                              createEvent="EVENT_APPLICATION_INSERT"
                              updateEvent="EVENT_APPLICATION_UPDATE"
                              deleteEvent="EVENT_APPLICATION_DELETE"
                      ></entity-management>
                  </zero-layout-item>
                  <zero-layout-item title="Users" size="30%">Users</zero-layout-item>
                  <zero-layout-item title="Roles" size="30%">Roles</zero-layout-item>
              </zero-layout-region>
          <zero-layout-region type="horizontal" size="40%">
                  <zero-layout-item title="App History" size="20%">
                      <entity-management
                              resourceName="ALL_APPLICATIONS_AUDIT"
                      ></entity-management>
                  </zero-layout-item>
                  <zero-layout-item title="Workflows" size="40%">
                      <entity-management
                              resourceName="ALL_WORKFLOWS"
                              createEvent="EVENT_WORKFLOW_INSERT"
                              updateEvent="EVENT_WORKFLOW_UPDATE"
                              deleteEvent="EVENT_WORKFLOW_DELETE"
                              :columns=${() => workflowColumns}
                      ></entity-management>
                  </zero-layout-item>
                  <zero-layout-item title="Workflow steps" size="40%">
                      <entity-management
                              resourceName="ALL_WORKFLOW_STEPS"
                              createEvent="EVENT_WORKFLOW_STEP_INSERT"
                              updateEvent="EVENT_WORKFLOW_STEP_UPDATE"
                              deleteEvent="EVENT_WORKFLOW_STEP_DELETE"
                              :createFormUiSchema="${x => x.workflowStepUISchema}"
                              :updateFormUiSchema="${x => x.workflowStepUISchema}"
                      ></entity-management>
                  </zero-layout-item>
          </zero-layout-region>
      </zero-layout-region>
  </zero-layout>
`;
