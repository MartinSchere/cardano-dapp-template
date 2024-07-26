import {
  Address,
  AddressType,
  blake2b_224,
  CredentialType,
  derivePublicKey,
  Ed25519PrivateNormalKeyHex,
  Ed25519PublicKey,
  HexBlob,
  NetworkId,
} from "@blaze-cardano/core";
import { ed25519 } from "@noble/curves/ed25519";

const NETWORK_ID = NetworkId.Testnet;

const alice = generateActor();
const bob = generateActor();
const charlie = generateActor();

function generateActor() {
  const privKey = Buffer.from(ed25519.utils.randomPrivateKey()).toString("hex"); // Secure random private key

  const paymentPublicKey = Ed25519PublicKey.fromHex(
    derivePublicKey(Ed25519PrivateNormalKeyHex(privKey))
  );

  const address = new Address({
    type: AddressType.EnterpriseKey,
    networkId: NETWORK_ID,
    paymentPart: {
      type: CredentialType.KeyHash,
      hash: blake2b_224(HexBlob(paymentPublicKey.hex())),
    },
  });

  return {
    privKey: Ed25519PrivateNormalKeyHex(privKey),
    address,
  };
}

export { alice, bob, charlie };
