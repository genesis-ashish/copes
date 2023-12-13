plugins {
    distribution
}

dependencies {
    implementation(project(":copes-config"))
    implementation(project(":copes-dictionary-cache"))
    implementation(project(":copes-eventhandler"))
    implementation(project(":copes-messages"))
    implementation(project(":copes-script-config"))
}

description = "copes-distribution"

distributions {
    main {
        contents {
            // Octal conversion for file permissions
            val libPermissions = "600".toInt(8)
            val scriptPermissions = "700".toInt(8)
            into("copes/bin") {
                from(configurations.runtimeClasspath)
                exclude("copes-config*.jar")
                exclude("copes-script-config*.jar")
                exclude("copes-distribution*.jar")
                include("copes-*.jar")
            }
            into("copes/lib") {
                from("${project.rootProject.buildDir}/dependencies")
                duplicatesStrategy = DuplicatesStrategy.EXCLUDE

                exclude("genesis-*.jar")
                exclude("copes-*.jar")
                exclude("*.zip")

                fileMode = libPermissions
            }
            into("copes/cfg") {
                from("${project.rootProject.projectDir}/copes-config/src/main/resources/cfg")
                from(project.layout.buildDirectory.dir("generated/product-details"))
                filter(
                    org.apache.tools.ant.filters.FixCrLfFilter::class,
                    "eol" to org.apache.tools.ant.filters.FixCrLfFilter.CrLf.newInstance("lf")
                )
            }
            into("copes/scripts") {
                from("${project.rootProject.projectDir}/copes-config/src/main/resources/scripts")
                from("${project.rootProject.projectDir}/copes-script-config/src/main/resources/scripts")
                filter(
                    org.apache.tools.ant.filters.FixCrLfFilter::class,
                    "eol" to org.apache.tools.ant.filters.FixCrLfFilter.CrLf.newInstance("lf")
                )
                fileMode = scriptPermissions
            }
            // Removes intermediate folder called with the same name as the zip archive.
            into("/")
        }
    }
}

val distribution by configurations.creating {
    isCanBeConsumed = true
    isCanBeResolved = false
}

// To give custom name to the distribution package
tasks {
    distZip {
        archiveBaseName.set("genesisproduct-copes")
        archiveClassifier.set("bin")
        archiveExtension.set("zip")
        inputs.files(rootProject.getTasksByName("copyDependencies", true))
    }
    distTar {
        enabled = false
    }
    copyDependencies {
        enabled = false
    }
}

artifacts {
    val distzip = tasks.distZip.get()
    add("distribution", distzip.archiveFile) {
        builtBy(distzip)
    }
}

publishing {
    publications {
        create<MavenPublication>("copesServerDistribution") {
            artifact(tasks.distZip.get())
        }
    }
}

description = "copes-distribution"
