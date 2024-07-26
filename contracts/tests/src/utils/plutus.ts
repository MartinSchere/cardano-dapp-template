// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { type Script } from "@blaze-cardano/core";
import { applyParamsToScript, cborToScript } from "@blaze-cardano/uplc";

export interface MainSpend {
    new (): Script;
datum: undefined;
    redeemer: {greeting:string};
  };

  export const MainSpend = Object.assign(
    function () {return cborToScript("58850100003232323232322322322533300653330063371e6eb8c028c020dd5001a4410d48656c6c6f2c20576f726c64210014a22c29309b2b299980219b8748000c014dd500089919299980498058010a4c2c6eb8c024004c018dd50008b19299980199b8748000c01000454ccc018c01400452616163754002ae6955ceaab9e5573eae855d11", "PlutusV2");},
    {datum: {"title":"Unit","description":"The nullary constructor.","anyOf":[{"dataType":"constructor","index":0,"fields":[]}]}},
    {redeemer: {"title":"Redeemer","anyOf":[{"title":"Greet","dataType":"constructor","index":0,"fields":[{"dataType":"bytes","title":"greeting"}]}]}},
  ) as unknown as MainSpend;