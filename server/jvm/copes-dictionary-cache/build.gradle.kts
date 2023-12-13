
// Add your genesis config dependencies here
dependencies {
    implementation(project(":copes-dictionary-cache:copes-generated-dao"))
    implementation(project(":copes-dictionary-cache:copes-generated-fields"))
    implementation(project(":copes-dictionary-cache:copes-generated-hft"))
    implementation(project(":copes-dictionary-cache:copes-generated-sysdef"))
    implementation(project(":copes-dictionary-cache:copes-generated-view"))

    implementation("global.genesis:auth-config:${properties["authVersion"]}")
}

description = "copes-dictionary-cache"
