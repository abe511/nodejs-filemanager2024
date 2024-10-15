import { readFile } from "fs/promises";
import { access, constants } from "fs";
import path from "path";


const cat = (args) => {
    access(args[0], constants.F_OK, (err) => {
        if(err && err.code === "ENOENT") {
            process.stdout.write("Operation failed\n$ ");
        } else {
            args.forEach( async (el) => {
                let file = "";
                try {
                    file = await readFile(path.resolve(el), "utf-8");
                    if(file.length > 0)
                        process.stdout.write(`${file}$ `);
                }
                catch(e) {
                    process.stdout.write("Operation failed\n");
                }
            });
        }
    });
    return 0;
}

export default cat;