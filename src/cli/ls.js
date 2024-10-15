import fs from "fs/promises";
import path from "path";
import showPrompt from "./prompt.js";

const showTable = async (relativePath) => { 
    let list = [];
    let error = 0;

    try {
        list = await fs.readdir(path.resolve(relativePath), {withFileTypes: true});
    } catch(e) {
        error = 1;
        process.stdout.write("Operation failed\n");
    }

    if(error === 0) {
        // construct the table
        const table = list.map((el) => {

            let fileType = ""; 
            const types = {
                "block": el.isBlockDevice(),
                "char": el.isCharacterDevice(),
                "dir": el.isDirectory(),
                "fifo": el.isFIFO(),
                "file": el.isFile(),
                "socket": el.isSocket(),
                "symlink": el.isSymbolicLink(),
            };

            // check the file type
            for(let t of Object.keys(types)) {
                if(types[t]) fileType = t;
            }

            return {
                name: el.name,
                type: fileType
            }
        });

        // filter and join
        const dirList = table.filter((el) => el.type === "dir");
        const fileList = table.filter((el) => el.type !== "dir");
        const tableSorted = dirList.concat(fileList);

        process.stdout.write(`Path: ${path.resolve(relativePath)}\n`);
        console.table(tableSorted, ["name", "type"]);
    }
        showPrompt();
};

const ls = (args) => {
    if(!args.length) {
        showTable(process.cwd());
    } else {
        args.forEach((path) => {
            showTable(path);
        });
    }
    return 0;
};

export default ls;