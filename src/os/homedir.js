import os from "os";

const showHomedir = () => {
    process.stdout.write(`User Home directory: ${os.homedir()}\n`);
}

export default showHomedir;