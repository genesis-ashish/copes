import { html } from '@microsoft/fast-element';
import type { Home } from './home';

export const HomeTemplate = html<Home>`
  <!-- insert template code here -->
  <zero-layout>
      <zero-layout-region type="vertical" >
              <zero-layout-region type="horizontal" size="70%">
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
          <zero-layout-region type="vertical" size="30%">
                  <zero-layout-item title="App History">
                      <entity-management
                              resourceName="ALL_APPLICATIONS_AUDIT"
                      ></entity-management>
                  </zero-layout-item>
          </zero-layout-region>
      </zero-layout-region>
  </zero-layout>
`;
