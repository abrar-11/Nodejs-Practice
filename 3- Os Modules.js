console.log("-------- Nodejs Os Module --------");

const os = require("os");

const type = os.type;
const uptime = os.uptime;
const version = os.version;
const platform = os.platform;

console.log(`
    Os Type: ${type}
    UpTime : ${uptime}
    version : ${version}
    platform : ${platform}

`);
