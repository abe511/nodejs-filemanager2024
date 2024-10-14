import { readFile } from "fs/promises";
import { access, constants } from "fs";
import { createHash } from "crypto";
import path from "path";


const calcHash = (args) => {
    if(args.length === 1) {
        access(args[0], constants.F_OK, async (err) => {
            if(err && err.code === "ENOENT") {
                process.stdout.write("Operation failed\n$ ");
            } else {
                let file = "";
                file = await readFile(path.resolve(args[0]), "utf-8");
                const hash = createHash("sha256").update(file).digest("hex");
                process.stdout.write(`Hash: ${hash}\n$ `);
            }
        });
    } else {
        process.stdout.write("Operation failed\n$ ");
    }
    return 0;
}


export default calcHash;