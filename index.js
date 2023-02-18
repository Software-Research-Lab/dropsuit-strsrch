//#region Info

/**
 * @file <h3>DropSuit</h3>
 * <p>
 *   DropSuit is a JavaScript(ES6) and Node.js(v14.x) module library
 *   created by Lado Oniani that offers a diverse collection of functions
 *   for natural language processing (NLP) and data manipulation.
 *   It provides a curated collection of original and classic techniques and methods
 *   for tasks such as text analysis, language understanding and generation,
 *   as well as for data manipulation tasks. Additionally,
 *   it includes unique tools and features for chatbot dialog flow logic
 *   and other specific use cases.
 *   The library is open-source and available under the Apache License 2.0.
 *   Whether you're a researcher, developer, or data scientist,
 *   DropSuit offers a range of tools to enhance your work,
 *   with a focus on diversity and experimentation.
 * </p>
 * @author Lado Oniani
 * {@link https://github.com/ladooniani GitHub}
 * @see mailto:ladooniani@gmail.com
 * @version 1.0.0
 * @see https://github.com/ladooniani/DropSuit#readme
 * @copyright 2016-2023 Lado Oniani - DropSuit. All Rights Reserved.
 * @license Apache License 2.0
 */

//#endregion

//#region  Constructor

function Constructor(input, requests, responses, dsout) {
  this.input = input;
  this.requests = requests;
  this.responses = responses;
  this.dsout = dsout;
}

//#endregion

//#region strsrch

/**
 * @class strsrch
 * @classdesc
 * Constructs the strsrch object.
 * Implements the question/answer input/output search functionality.
 * Searches by equality or substrings inverse content matching condition.
 * Processes default object instance json key value (requests and responses) array patterns.
 * @constructor
 * @param {string} [input=null] - Input sentence. Use NULL to process the constructor's input.
 * @returns {object} - Contains the answers() method that returns an array of equal
 * or substrings inverse inclusion intent answers.
 */

Constructor.prototype.strsrch = function (input) {
  input = objOrFncInp(input, this.input);
  let out = strsrch_f(input, this.requests, this.responses, this.dsout);
  return out;
};

//#endregion

//#region strsrch_f

let res1, res2, insub, subin, input, answer, req_pattern, res_pattern;
let objarr = [];

const dropsuit_clnstr = require("../dropsuit-clnstr/index.js");
var ds_clnstr = new dropsuit_clnstr(null, false);

/**
 * @function strsrch_f
 * @description
 * Implements the question/answer input/output search functionality.
 * Searches by equality or substrings inverse content matching condition.
 * @param {string} userRequest - Input sentence.
 * @param {array} requests - Array of requests.
 * @param {array} responses - Array of responses.
 * @param {boolean} [dispout=false] - Display processing output results in terminal.
 * @returns {object} - Contains the answers() method that returns an array of equal
 * or substrings inverse inclusion intent answers.
 * @example
 * strsrch_f("input sentence", ["request1", "request2"], ["response1", "response2"], true);
 */

function strsrch_f(userRequest, requests, responses, dispout) {
  objarr = [];
  userRequest = ds_clnstr.clnstr(userRequest).txt();
  let arr = [];
  let indexArr = [];
  let subcindArr = [];
  for (l = 0; l < requests.length; l++) {
    let input_requests_sep = requests[l];
    for (u = 0; u < input_requests_sep.length; u++) {
      let sentence = ds_clnstr.clnstr(input_requests_sep[u]).txt();
      arr.push(sentence);
      indexArr.push(l);
    }
  }

  for (l = 0; l < requests.length; l++) {
    for (u = 0; u < requests[l].length; u++) {
      var req = requests[l];
      let request = req[u];
      request = ds_clnstr.clnstr(request).txt();
      contrsub(userRequest, request, subcindArr, requests[l], responses[l]);
    }
  }

  display(objarr, dispout); /// DISPLAY >>
  return objarr;
}

function return_qaioEqSbOut() {
  const qaioEqSbObj = {
    input_string_exist: input,
    request_string_found: answer,
    substring_exist: insub,
    inverse_substring_exist: subin,
    requests_pattern_found: req_pattern,
    responses_pattern_found: res_pattern,
    istrue: function () {
      if (insub == true || subin == true) {
        return true;
      } else {
        return false;
      }
    },
    rstr: function () {
      return this.request_string_found;
    },
    rpat: function () {
      return this.requests_pattern_found;
    },
    apat: function () {
      return this.responses_pattern_found;
    },
  };
  return qaioEqSbObj;
}

function objOrFncInp(function_input, constructor_input) {
  if (function_input !== "" && function_input !== null) {
    function_input = function_input;
  } else {
    function_input = constructor_input;
  }
  return function_input;
}

//#endregion

//#region contrsub

function contrsub(userInput, request, subcindArr, requests, responses) {
  userInput = ds_clnstr.clnstr(userInput).txt();
  request = ds_clnstr.clnstr(request).txt();
  res1 = sub(userInput, request);
  res2 = sub(request, userInput);
  if (res1 == true || res2 == true) {
    if (!subcindArr.includes(request)) {
      subcindArr.push(request);
      insub = res1;
      subin = res2;
      input = userInput;
      answer = request;
      req_pattern = requests;
      res_pattern = responses;
      subcindArr = return_qaioEqSbOut();
      objarr.push(subcindArr);
    }
  }
  if (insub == true) {
    return true;
  } else if (insub == false) {
    if (subin == true) {
      return true;
    } else if (subin == false) {
      return false;
    }
  }
}

function sub(userInput, response) {
  if (userInput.indexOf(response) !== -1) {
    return true;
  } else if (userInput.includes(response)) {
    return true;
  } else if (userInput.search(response) !== -1) {
    return true;
  } else if (userInput.match(response) !== null) {
    return true;
  } else {
    return false;
  }
}

//#endregion

//#region console log

const getdt = require("./infodt.js");
let fnctit = getdt.displayInfoData();
const line = fnctit.line;
var description = fnctit.descript;

function display(objgroup, dispout) {
  if (dispout == true) {
    console.log("\n", description, "\nObjects:", objgroup, "\n", line);
  }
}

//#endregion

//#region Export Module Constructor

module.exports = Constructor;

//#endregion
