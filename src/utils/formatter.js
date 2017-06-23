import chalk from 'chalk';
import emoji from 'node-emoji';

export const msgTypes = {
  FADED: 'faded',
  INFO: 'info',
  ERROR: 'error',
  SUCCESS: 'success',
  SCREAM: 'scream'
};

export const icons = {
  ERROR_SKULL: 'skull_and_crossbones',
  WAITING: 'hourglass_flowing_sand',
  SUCCESS: 'beer',
  SCREAM: 'scream',
  INFO: 'point_right'
};

export const chalkMsg = (msg, type) => {
  switch (type) {
    case msgTypes.ERROR:
      return chalk.bold.red(msg);
    case msgTypes.FADED:
      return chalk.dim.yellow(msg);
    case msgTypes.INFO:
      return chalk.white(msg);
    case msgTypes.SUCCESS:
      return chalk.green(msg);
    case msgTypes.SCREAM:
      return chalk.white.bgRed(msg);
    default:
      return msg;
  }
};

export const emojiMsg = emojiName => emoji.get(emojiName);
