dependencies {
    implementation("global.genesis:genesis-messages")
    compileOnly(project(path = ":copes-dictionary-cache", configuration = "codeGen"))
}

description = "copes-messages"