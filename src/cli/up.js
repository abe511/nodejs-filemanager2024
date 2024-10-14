import { parse } from "path";


const up = () => {
    const root = parse(process.cwd()).root;
    if(process.cwd() === root)
        process.chdir(root);
    else
        process.chdir("..");
    return 0;
}

export default up;