import { access, constants } from "fs";
import fs from "fs/promises";
import path from "path";


const rn = (args) => {
    if(args.length === 2) {
        const rename = async (filenames) => {
            try {
                await fs.rename(path.resolve(filenames[0]), path.resolve(filenames[1]));
            }
            catch(e) {
                process.stdout.write("Operation failed\n$ ");
            };
        }
        rename(args);
    } else {
        throw new Error();
    }
    return 0;
}

export default rn;