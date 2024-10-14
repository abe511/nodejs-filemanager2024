import cd from "../cli/cd.js";
import up from "../cli/up.js";
import ls from "../cli/ls.js";

import cat from "../fs/cat.js";
import add from "../fs/add.js";
import rn from "../fs/rn.js";
import cp from "../fs/cp.js";
import mv from "../fs/mv.js";
import rm from "../fs/rm.js";

import os from "../os/os.js";

import calcHash from "../hash/calcHash.js";

import compress from "../zlib/compress.js";
import decompress from "../zlib/decompress.js";




const commands = {
    "up": up,
    "cd": cd,
    "ls": ls,
    "cat": cat,
    "add": add,
    "rn": rn,
    "cp": cp,
    "mv": mv,
    "rm": rm,
    "os": os,
    "hash": calcHash,
    "compress": compress,
    "decompress": decompress
};


export default commands;
