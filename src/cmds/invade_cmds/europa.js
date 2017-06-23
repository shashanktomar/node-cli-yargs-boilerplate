import { logProcessingStep, logSuccess, logInfo } from '../../utils/logger';

export const command = 'europa';
export const desc = 'Invade europa, its gonna be awesome';
export const builder = yargs =>
  yargs
    .option('for', {
      alias: 'f',
      string: true,
      describe: 'Reason to invade europa',
      requiresArg: true,
      default: 'fun'
    })
    .option('walk', {
      alias: 'w',
      boolean: true,
      describe: 'Should walk to europa',
      default: false
    });

export const handler = argv => {
  run(argv.for, argv.walk);
};

function run(reason, shouldWalk) {
  if (shouldWalk) {
    logProcessingStep('Eating a lot, its a long walk', 1, 2);
    setTimeout(() => {
      logProcessingStep('Walking to europa', 2, 2);
      setTimeout(() => {
        logInfo('Reached europa');
        setTimeout(() => logSuccess(`Invaded for ${reason}`), 1000);
      }, 1000);
    }, 1000);
  } else {
    logInfo('Reached europa');
    setTimeout(() => logSuccess(`Invaded for ${reason}`), 1000);
  }
}
