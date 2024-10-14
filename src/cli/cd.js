import os from "os";

const cd = (args) => {
    if(args.length >= 2) {
        return 1;
    }
    if(args[0] === "~")
        process.chdir(os.homedir());
    else
        process.chdir(args.toString());
    return 0;
}

export default cd;