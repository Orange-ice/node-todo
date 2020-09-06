#!/usr/bin/env node
const {program} = require('commander');
const api = require('./index.js')
const pck = require('./package.json')

program.version(pck.version);

program
  .command('add')
  .description('add a task')
  .action((source, destination) => {
    api.add(source.args[0])
    // console.log(source.args)
    // const word = source.args.join(' ')
    // console.log(word)
  });

program
  .command('clear')
  .description('clear all task')
  .action((source, destination) => {
    api.clear()
  });


program
  .command('c')
  .description('show all task')
  .action((source, destination) => {
    api.showAll()
  });

program.parse(process.argv);

