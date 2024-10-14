import showPrompt from "./prompt.js";

const showGreetings = (username) => {
    process.stdout.write(`Welcome to the File Manager, Mr. ${username}!\n`);
    showPrompt();
}

export default showGreetings;