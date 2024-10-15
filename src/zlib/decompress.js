import { createReadStream, createWriteStream, access, constants } from "fs";
import { createBrotliDecompress } from "zlib";
import path from "path";


const decompress = (args) => {
    if(args.length === 2) {
        access(args[0], constants.F_OK, (err) => {
            if(err && err.code === "ENOENT") {
                process.stdout.write("Operation failed\n$ ");
            } else {
                const unzip = async (filenames) => {
                    const brotli = createBrotliDecompress();
                    const rs = createReadStream(path.resolve(filenames[0]));
                    const ws = createWriteStream(path.resolve(filenames[1]));
                    rs.pipe(brotli).pipe(ws);
                };
                unzip(args);
            }
        });
    } else {
        process.stdout.write("Operation failed\n");
    }
    return 0;
}

export default decompress;