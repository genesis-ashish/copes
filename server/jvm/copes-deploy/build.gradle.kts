plugins {
    id("global.genesis.deploy")
}

description = "copes-deploy"

dependencies {
    genesisServer(
        group = "global.genesis",
        name = "genesis-distribution",
        version = properties["genesisVersion"].toString(),
        classifier = "bin",
        ext = "zip"
    )
    genesisServer(
        group = "global.genesis",
        name = "auth-distribution",
        version = properties["authVersion"].toString(),
        classifier = "bin",
        ext = "zip"
    )

    genesisServer(project(":copes-distribution", "distribution"))
    genesisServer(project(":copes-site-specific", "distribution"))
    genesisWeb(":client")

    api(project(":copes-eventhandler"))
    api(project(":copes-messages"))
    // Add additional dependencies on other external distributions here
}
tasks {
    copyDependencies {
        enabled = false
    }
}
