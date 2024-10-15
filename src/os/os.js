import showEOL from "./eol.js";
import showCPUInfo from "./cpuInfo.js";
import showHomedir from "./homedir.js";
import showUsername from "./username.js";
import showArch from "./arch.js";


const os = (arg) => {
    if(arg.length !== 1) {
        process.stdout.write("Operation failed\n");
    } else {
        switch(arg[0]) {
            case "--EOL": {
                showEOL();
                break;
            }
            case "--cpus": {
                showCPUInfo();
                break;
            }
            case "--homedir": {
                showHomedir();
                break;
            }
            case "--username": {
                showUsername();
                break;
            }
            case "--architecture": {
                showArch();
                break;
            }
            
        }
    }
};

export default os;