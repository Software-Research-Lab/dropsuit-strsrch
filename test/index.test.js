//#region strsrch test

const assert = require("assert");
const dropsuit_strsrch = require("../index.js");
const json_data = require("../jsobj.js");
const localFile = "./test/intents.json";

let input0 = "someword WHAT IS A COMPUTER? someword";
let input0_expected = ["what is a computer"];

let input1 = "IS A COMPUTER";
let input1_expected = ["what is a computer"];

let input2 = "COMPUTER";
let input2_expected = [
  "what are some recommended healthy snacks for computer users",
  "what is a computer",
  "what are the components of a computer",
];

/// Note:
// The current implementation does not support searching for texts in the form of
// "COMPUTER someword", "IS A someword COMPUTER", "IS A COMPUTER someword"
// as these inputs are unsearchable based on the intents.json data used.

let array = [];

let intentData = json_data.jsonIntStrct(localFile);
let dsstrsrch = new dropsuit_strsrch(
  null,
  intentData.req_arr,
  intentData.res_arr,
  true
);

describe("dropsuit-strsrch", () => {
  describe("strsrch()", () => {
    it(
      "With rstr() input0: (" +
        input0 +
        ") result must be: (" +
        [input0_expected] +
        ")",
      () => {
        array = [];
        let strsrch_output = dsstrsrch.strsrch(input0);

        for (i = 0; i < strsrch_output.length; i++) {
          let output = strsrch_output[i].rstr();
          array.push(output);
        }
        // console.log("Result 0:", array);
        assert.deepEqual(array, input0_expected);
      }
    );
    it(
      "With rstr() input1: (" +
        input1 +
        ") result must be: (" +
        [input1_expected] +
        ")",
      () => {
        array = [];

        let strsrch_output = dsstrsrch.strsrch(input1);
        for (i = 0; i < strsrch_output.length; i++) {
          let output = strsrch_output[i].rstr();
          array.push(output);
        }
        // console.log("Result 1:", array);
        assert.deepEqual(array, input1_expected);
      }
    );
    it(
      "With rstr() input2: (" +
        input2 +
        ") result must be: (" +
        [input2_expected] +
        ")",
      () => {
        array = [];

        let strsrch_output = dsstrsrch.strsrch(input2);
        for (i = 0; i < strsrch_output.length; i++) {
          let output = strsrch_output[i].rstr();
          array.push(output);
        }
        // console.log("Result 2:", array);
        assert.deepEqual(array, input2_expected);
      }
    );

    /*
    
    it("Show Object Data Logout Details and Options", () => {
      let strsrch_output = dsstrsrch.strsrch(input0);
      console.log(strsrch_output);
    });

    */
  });
});

//#endregion
