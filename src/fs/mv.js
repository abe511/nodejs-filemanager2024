import { createReadStream, createWriteStream, access, constants } from "fs";
import path from "path";
import rm from "./rm.js";


const mv = (args) => {
    if(args.length === 2) {
        access(args[0], constants.F_OK, (err) => {
            if(err && err.code === "ENOENT") {
                process.stdout.write("Operation failed\n$ ");
            } else {
                const move = async (filenames) => {
                    const rs = createReadStream(path.resolve(filenames[0]), "utf-8");
                    const ws = createWriteStream(path.resolve(filenames[1]));
                    rs
                    .pipe(ws)
                    .once("close", async () => {
                        rs.destroy();
                        rm([filenames[0]]);
                    })
                };
                move(args);
            }
        });
    } else {
        process.stdout.write("Operation failed\n$ ");
    }
    return 0;
}


export default mv;