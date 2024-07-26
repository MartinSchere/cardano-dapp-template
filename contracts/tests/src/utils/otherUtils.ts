import plutusJson from "../../../plutus.json";

export function readValidator(validatorName: string) {
  const validator = plutusJson.validators.find(
    (validator) => validator.title === validatorName
  );

  if (!validator) {
    throw new Error(`Validator ${validatorName} not found`);
  }

  return validator.compiledCode;
}
