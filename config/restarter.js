// var sys = require('sys')
var exec = require('child_process').exec;

function puts(error, stdout, stderr) { console.log(stdout) }

function RestartServer() {
    console.log(`${new Date()} \x1b[91mINCOMING COMMAND: RESTART SERVER\x1b[0m`);
    exec("pm2 restart json-server-3000", puts);
}

module.exports = RestartServer;
