export {

}

declare global{
    namespace NodeJS {
        interface ProcessEnv {
            BROWSER: "chromium" | "firefox" | "webkit",
            ENV: "stage" | "test" | "prod"
        }
    }

}