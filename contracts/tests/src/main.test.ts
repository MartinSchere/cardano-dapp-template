import { Emulator, EmulatorProvider } from "@blaze-cardano/emulator";
import { alice, bob, charlie } from "./utils/actors";
import { NetworkId, TransactionOutput } from "@blaze-cardano/core";
import { Blaze, HotSingleWallet, makeValue } from "@blaze-cardano/sdk";
import { MainSpend } from "./utils/plutus";

describe("Test suite", () => {
  let emulator: Emulator;
  let emulatorProvider: EmulatorProvider;

  let aliceWallet: HotSingleWallet;
  let bobWallet: HotSingleWallet;
  let charlieWallet: HotSingleWallet;

  beforeEach(() => {
    emulator = new Emulator([
      // alice gets another UTxO to use for the token mint
      new TransactionOutput(alice.address, makeValue(BigInt(1e12))),
      new TransactionOutput(alice.address, makeValue(BigInt(1e12))),

      new TransactionOutput(bob.address, makeValue(BigInt(1e12))),
      new TransactionOutput(charlie.address, makeValue(BigInt(1e12))),
    ]);
    emulatorProvider = new EmulatorProvider(emulator);

    aliceWallet = new HotSingleWallet(
      alice.privKey,
      NetworkId.Testnet,
      emulatorProvider
    );

    bobWallet = new HotSingleWallet(
      bob.privKey,
      NetworkId.Testnet,
      emulatorProvider
    );

    charlieWallet = new HotSingleWallet(
      charlie.privKey,
      NetworkId.Testnet,
      emulatorProvider
    );
  });

  it("Should work", () => {
    const mainSpend = new MainSpend();
  });
});
