rootProject.name = "genesisproduct-copes"

buildCache {
    local {
        directory = File(rootDir.parentFile.parent, "build-cache")
        removeUnusedEntriesAfterDays = 30
        isEnabled = true
    }
}

pluginManagement {
    pluginManagement {
        val genesisVersion: String by settings
        val deployPluginVersion: String by settings
        plugins {
            id("global.genesis.build") version genesisVersion
            id("global.genesis.deploy") version deployPluginVersion
        }
    }
    repositories {
        mavenLocal {
            // VERY IMPORTANT!!! EXCLUDE AGRONA AS IT IS A POM DEPENDENCY AND DOES NOT PLAY NICELY WITH MAVEN LOCAL!
            content {
                excludeGroup("org.agrona")
            }
        }
        mavenCentral()
        gradlePluginPortal()
        maven {
            val repoUrl = if(extra.properties["clientSpecific"] == "true") {
                "https://genesisglobal.jfrog.io/genesisglobal/libs-release-client"
            } else {
                "https://genesisglobal.jfrog.io/genesisglobal/dev-repo"
            }
            url = uri(repoUrl)
            credentials {
                username = extra.properties["genesisArtifactoryUser"].toString()
                password = extra.properties["genesisArtifactoryPassword"].toString()
            }
        }
    }
}



include("copes-config")
include("copes-messages")
include("copes-eventhandler")
include("copes-script-config")
include("copes-distribution")
include("copes-dictionary-cache")
include("copes-dictionary-cache:copes-generated-sysdef")
include("copes-dictionary-cache:copes-generated-fields")
include("copes-dictionary-cache:copes-generated-dao")
include("copes-dictionary-cache:copes-generated-hft")
include("copes-dictionary-cache:copes-generated-view")
include("copes-deploy")
include("copes-site-specific")

includeBuild("../../client")
