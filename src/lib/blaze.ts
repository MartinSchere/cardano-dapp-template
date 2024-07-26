import { Blaze, Maestro, Wallet } from "@blaze-cardano/sdk";
import { env } from "./env";

const maestro = new Maestro({
  network: env.NEXT_PUBLIC_NETWORK,
  apiKey: env.MAESTRO_API_KEY,
});

export const getBlaze = async (wallet: Wallet) => {
  return Blaze.from(maestro, wallet);
};
