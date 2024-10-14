
const exitProcess = (username) => {
    process.stdout.write(`Thank you for using File Manager, Mr. ${username}, goodbye!\n`);
    process.exit(0);
}

export default exitProcess;