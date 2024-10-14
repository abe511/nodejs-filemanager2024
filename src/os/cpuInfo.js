import os from "os";

const CPU_INFO = os.cpus();

const showCPUInfo = () => {
    process.stdout.write(`CPU Cores: ${CPU_INFO.length}\n`);
    CPU_INFO.map((el) => {
        process.stdout.write(`${el.model}\n`);
        process.stdout.write(`${(el.speed * 0.001).toFixed(2)}GHz\n`);
    });
};

export default showCPUInfo;