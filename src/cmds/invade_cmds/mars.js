import { logProcessingStep, logSuccess, logInfo } from '../../utils/logger';

export const command = 'mars';
export const desc = 'Invade mars, its gonna be rocky';
export const builder = yargs =>
  yargs
    .option('for', {
      alias: 'f',
      string: true,
      describe: 'Reason to invade mars',
      requiresArg: true,
      default: 'fun'
    })
    .option('walk', {
      alias: 'w',
      boolean: true,
      describe: 'Should walk to mars',
      default: false
    });

export const handler = argv => {
  run(argv.for, argv.walk);
};

function run(reason, shouldWalk) {
  if (shouldWalk) {
    logProcessingStep('Eating a lot, its a long walk', 1, 2);
    setTimeout(() => {
      logProcessingStep('Walking to mars', 2, 2);
      setTimeout(() => {
        logInfo('Reached mars');
        setTimeout(() => logSuccess(`Invaded for ${reason}`), 1000);
      }, 1000);
    }, 1000);
  } else {
    logInfo('Reached mars');
    setTimeout(() => logSuccess(`Invaded for ${reason}`), 1000);
  }
}
