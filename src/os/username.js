import os from "os";

const showUsername = () => {
    process.stdout.write(`${os.userInfo().username}\n`);
}


export default showUsername;