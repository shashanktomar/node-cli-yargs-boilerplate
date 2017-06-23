export const command = ['invade <command>'];
export const desc = 'Invade space territory';
export const builder = yargs => yargs.commandDir('invade_cmds');
export const handler = argv => {
  console.log(argv);
};
