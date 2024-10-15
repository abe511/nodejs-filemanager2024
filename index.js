import os from "os";
import inputHandler from "./src/handlers/inputHandler.js";
import showPrompt from "./src/cli/prompt.js";
import showGreetings from "./src/cli/greets.js";
import exitProcess from "./src/cli/exit.js";

const USERNAME = process.argv.slice(2)[1].split("=")[1];
export const DATA = {
    username: USERNAME
};

const main = () => {

    process.chdir(os.homedir());
    showGreetings(USERNAME);

    // EXIT ON CTRL+C
    process.on("SIGINT", () => {
        process.stdout.write("\n");
        exitProcess(USERNAME);
    });

    // MAIN LOOP 
    process.stdin.on("data", (data) => {
        // input without the end-of-line chars
        // TODO: handle multiline input
        // check if last char is '\' append remaining line to input
        const input = data.toString("utf-8").split(os.EOL)[0];
        // EXIT
        if(input === ".exit") {
            exitProcess(USERNAME);
        }
        // MAIN HANDLER
        inputHandler(input, DATA);
        showPrompt();
    });
}

main();