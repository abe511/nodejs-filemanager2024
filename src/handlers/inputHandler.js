import commands from "./commands.js";


const inputHandler = (input) => {

    const [ cmd, ...unfiltered ] = input.split(" ");
    const args = unfiltered.filter((arg) => arg !== "");
    if(commands[cmd]) {
        try {
            const exitCode = commands[cmd](args);
            if(exitCode > 0)
                process.stdout.write("Operation failed\n");
        } catch(err) {
            process.stdout.write("Operation failed\n");
        }
    } else {
        process.stdout.write(`${cmd}: Invalid input\n`);
    }

};

export default inputHandler;
