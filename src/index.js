#!/usr/bin/env node
import yargs from 'yargs';

yargs // eslint-disable-line
  .commandDir('cmds')
  .usage('Usage: node-cli <command> [options]')
  .demandCommand(1)
  .help('h')
  .alias('h', 'help').argv;
