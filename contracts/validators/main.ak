use aiken/transaction.{ScriptContext}
use contracts/types.{Greet, Redeemer}

validator {
  fn spend(datum: Void, redeemer: Redeemer, context: ScriptContext) {
    let Greet { greeting } = redeemer

    if greeting == "Hello, World!" {
      True
    } else {
      fail @"Invalid greeting"
    }
  }
}
