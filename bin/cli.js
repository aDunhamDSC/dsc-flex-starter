#!/usr/bin/env node
console.log("Awesome Command");

const {execSync} = require('child_process');

const runCommand = (command) => {
    try {
        execSync(`${command}`, {stdio: 'inherit'})
    } catch (error) {
        console.error(`Failed to execute ${command}`, e);
        return false;
    }
    return true
}

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/aDunhamDSC/dsc-flex-starter ${repoName}`;
const installDepsCommand = `cd ${repoName} &&  npm install`;

console.log(`Cloning the repository with name ${repoName}`);
const checkedOut = runCommand(gitCheckoutCommand);
if(!checkedOut) process.exit(-1);

console.log(`Installing Dependencies for ${repoName}`);
const installDeps = runCommand(installDepsCommand);
if(!installDeps) process.exit(-1);

console.log(`Congratulations! You are ready to start. Follow commands to start`);
console.log(`cd ${repoName} && npm start`)
