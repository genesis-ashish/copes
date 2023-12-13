dependencies {
    implementation("global.genesis:genesis-pal-execution")
    implementation("global.genesis:genesis-eventhandler")
    implementation(project(":copes-messages"))
    api("global.genesis:genesis-db")
    compileOnly(project(":copes-config"))
    compileOnly(project(path = ":copes-dictionary-cache", configuration = "codeGen"))
    testImplementation("global.genesis:genesis-dbtest")
    testImplementation("global.genesis:genesis-testsupport")
    testImplementation(project(path = ":copes-dictionary-cache", configuration = "codeGen"))
}

description = "copes-eventhandler"