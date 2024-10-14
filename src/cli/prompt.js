
const showPrompt = () => {
    process.stdout.write(`You are currently in ${process.cwd()}\n`);
    process.stdout.write("$ ");
}

export default showPrompt;