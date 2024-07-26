import { cleanEnv, str } from "envalid";

export const env = cleanEnv(process.env, {
  NEXT_PUBLIC_NETWORK: str({ choices: ["mainnet", "preprod", "preview"] }),
  MAESTRO_API_KEY: str(),
});
