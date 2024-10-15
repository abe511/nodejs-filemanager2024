import os from "os";

const showArch = () => {
    process.stdout.write(`CPU architecture: ${os.arch()}\n`);
}

export default showArch;