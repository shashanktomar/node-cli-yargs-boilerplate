import { chalkMsg, msgTypes, emojiMsg, icons } from './formatter';

export const logSuccess = msg =>
  console.log(`${emojiMsg(icons.SUCCESS)}  ${chalkMsg(msg, msgTypes.SUCCESS)}`);

export const logInfo = msg =>
  console.log(`${emojiMsg(icons.INFO)} ${chalkMsg(msg, msgTypes.INFO)}`);

export const logError = msg =>
  console.log(`${emojiMsg(icons.ERROR_SKULL)}  ${chalkMsg(msg, msgTypes.ERROR)}`);

export const logProcessingStep = (msg, step, totalStep) => {
  const steps = chalkMsg(`[${step}/${totalStep}]`, msgTypes.FADED);
  console.log(`${steps} ${emojiMsg(icons.WAITING)}  ${chalkMsg(msg, msgTypes.INFO)}`);
};

export const logScream = msg => {
  const scream = emojiMsg(icons.SCREAM);
  console.log(
    `${scream} ${scream} ${scream}  ${chalkMsg(
      msg,
      msgTypes.SCREAM
    )}  ${scream} ${scream} ${scream}`
  );
};
