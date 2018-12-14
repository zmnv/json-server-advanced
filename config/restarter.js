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
    exec("cd /home/json-server-advanced", exec("git pull", puts));
    RestartServer();
}

module.exports = {
    RestartServer,
    DeployAndRestartServer
}
