/**
 * System              : Genesis Business Library
 * Sub-System          : multi-pro-code-test Configuration
 * Version             : 1.0
 * Copyright           : (c) Genesis
 * Date                : 2022-03-18
 * Function : Provide fields config for multi-pro-code-test.
 *
 * Modification History
 */

fields {
    field(name="APP_ID", type=STRING)
    field(name="APP_NAME", type=STRING)
    field(name="APP_ICON", type=STRING)
    field(name="APP_DESCRIPTION", type=STRING)
    field(name="APP_STATUS", type=ENUM("AVAILABLE", "INSTALLED","DEPLOYED", default = "AVAILABLE"))
    field(name="APP_INSTALLED_DATE", type=DATE)
    field(name="APP_VERSION", type=STRING)
    field(name="APP_CONFIGURATION", type=STRING)
    field(name="APP_URL", type=STRING)
    field(name="APP_INFO", type=STRING)

    field(name="TEMPLATE_ID", type=STRING)
    field(name="TEMPLATE_NAME", type=STRING)
    field(name="TEMPLATE_DESCRIPTION", type=STRING)
    field(name="TEMPLATE_VERSION", type=STRING)
    field(name="TEMPLATE_ROUTE_NAME", type=STRING)


}
