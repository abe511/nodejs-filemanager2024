import { unlink } from "fs/promises";
import path from "path";


const rm = (args) => {
    args.forEach( async (filename) => {
        try {
            await unlink(path.resolve(filename));
        }
        catch(e) {
            process.stdout.write("Operation failed\n$ ");
        }
    });
    return 0;
}

export default rm;