import { createReadStream, createWriteStream, access, constants } from "fs";
import path from "path";


const cp = (args) => {
    if(args.length === 2) {
        access(args[0], constants.F_OK, (err) => {
            if(err && err.code === "ENOENT") {
                process.stdout.write("Operation failed\n$ ");
            } else {
                const copy = async (filenames) => {
                    const rs = createReadStream(path.resolve(filenames[0]), "utf-8");
                    const ws = createWriteStream(path.resolve(filenames[1]));
                    rs.pipe(ws);
                };
                copy(args);
            }
        });
    } else {
        process.stdout.write("Operation failed\n$ ");
    }
    return 0;
}



export default cp;