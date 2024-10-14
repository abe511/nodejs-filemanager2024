import { createReadStream, createWriteStream, access, constants } from "fs";
import { createBrotliCompress } from "zlib";
import path from "path";


const compress = (args) => {
    if(args.length === 2) {
        access(args[0], constants.F_OK, (err) => {
            if(err && err.code === "ENOENT") {
                process.stdout.write("Operation failed\n$ ");
            } else {
                const zip = async (filenames) => {
                    const brotli = createBrotliCompress();
                    const rs = createReadStream(path.resolve(filenames[0]));
                    const ws = createWriteStream(path.resolve(filenames[1]));
                    rs.pipe(brotli).pipe(ws);
                };
                zip(args);
            }
        });
    } else {
        process.stdout.write("Operation failed\n");
    }
    return 0;
}

export default compress;