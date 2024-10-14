import os from "os";

const showEOL = () => {
    process.stdout.write(`Default system End-Of-Line character: ${JSON.stringify(os.EOL)}\n`);
}

export default showEOL;



