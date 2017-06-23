import { logSuccess } from '../utils/logger';

export const command = 'destroyEarth';
export const desc = 'Destroy earth, as if you are not';
export const builder = yargs =>
  yargs.option('why', {
    alias: 'n',
    string: true,
    describe: 'Why do you wanna destroy it?',
    requiresArg: true,
    default: 'I am evil'
  });

export const handler = argv => {
  run(argv.why);
};

function run(why) {
  logSuccess(`Destroyed. Reason: ${why}`);
}
