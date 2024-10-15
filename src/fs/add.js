import { writeFile } from "fs/promises";
import path from "path";


const add = (args) => {
    args.forEach( async (el) => {
        try {
            await writeFile(path.resolve(el), "", {flag: "wx"});
        }
        catch(e) {
            process.stdout.write("Operation failed\n$ ");
        }
    });
    return 0;
}

export default add;
