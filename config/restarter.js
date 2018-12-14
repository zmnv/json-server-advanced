// var sys = require('sys')
// const path = require('path');
const exec = require('child_process').exec;

function puts(error, stdout, stderr) { 
    console.log(stdout) 
    if(stderr) console.log(stderr);
}

function RestartServer() {
    console.log(`${new Date()} \x1b[91mINCOMING COMMAND: RESTART SERVER\x1b[0m`);
    exec("pm2 restart json-server-3000", puts);
}

function DeployAndRestartServer() {
    console.log(`${new Date()} \x1b[93mINCOMING COMMAND: DEPLOY SERVER\x1b[0m`);
    // exec("pm2 stop json-server-3000", () => console.log('\x1b[91mStop Server\x1b[0m'));
    exec("git pull", {cwd: '/home/json-server-advanced'}, puts);
    // setTimeout(() => {
    //     exec("pm2 start json-server-3000", () => console.log('\x1b[92mStart Server\x1b[0m'));
    // }, 0);
    // RestartServer();
}

module.exports = {
    RestartServer,
    DeployAndRestartServer
}
