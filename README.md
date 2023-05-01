[<img alt="TAI Lab." width="59px" src="https://github.com/ladooniani/Terbinari-CBM-Robot/blob/main/images/dropsuit.png" />](https://github.com/ladooniani/dropsuit#readme)

[![npm version](https://img.shields.io/npm/v/dropsuit-strsrch.svg?style=flat)](https://www.npmjs.com/package/dropsuit-strsrch) [![npm](https://img.shields.io/npm/dt/dropsuit-strsrch.svg?style=flat-square)](https://www.npmjs.com/package/dropsuit-strsrch) [![License](https://img.shields.io/npm/l/dropsuit-strsrch.svg)](https://www.npmjs.com/package/dropsuit-strsrch)

# Overview of [DropSuit](https://github.com/ladooniani/dropsuit#readme) NLP and the strsrch Function

[DropSuit](https://github.com/ladooniani/dropsuit#readme) NLP is an open-source JavaScript and Node.js library offering diverse functions for natural language processing and data manipulation. The strsrch function is one of its modules, designed for searching and matching patterns in arrays of question and answer inputs and outputs. It is available under the Apache License 2.0.

## DropSuit NLP Method: strsrch - A JavaScript and Node.js function for searching and matching patterns in question and answer arrays

The strsrch function is a part of the DropSuit NLP library, it's a JavaScript and Node.js function that searches and matches patterns in arrays of question and answer inputs and outputs using equality or substring inverse content matching. It's open-source and available under the Apache License 2.0.

### Installation

Add the library function by installing it via npm:

```
npm install dropsuit-strsrch
```

### Usage

Import the library in your project:

```
const dropsuit_strsrch = require("dropsuit-strsrch");

```

Process [intents.json](https://github.com/ladooniani/dropsuit-strsrch/blob/main/test/intents.json) using 'jsonIntStrct' function:

```
const json_data = require("dropsuit-strsrch/jsobj.js");
let intentData = json_data.jsonIntStrct("assets/json/intents.json");
```

Set boolean parameter (true/false) argument value to display console log processing results output information in terminal:

```
let dsstrsrch = new dropsuit_strsrch(myInputString, intentData.req_arr, intentData.res_arr, false);
```

#### strsrch(string/null)

The 'strsrch' function searches for a specified string in the default object instance's JSON key values ('req_arr: requests' and 'res_arr: responses'). If you pass in a string, the function will search for that string. If you keep it 'null', the function will process the constructor's 'input'.

#### Output options:

- **istrue()** returns 'true' if an exact, partial, or inverse partial match is found, otherwise returns 'false'.
- **rstr()** Returns the exact, partial, or inverse partial match if it exists.
- **rpat()** Returns the request pattern if an exact, partial, or inverse partial match is found.
- **apat()** Returns the response pattern if an exact, partial, or inverse partial match is found.

To extract individual outputs from the array of objects:

```
for (i = 0; i < dsstrsrch_output.length; i++) {
  let out = dsstrsrch_output[i].rstr();
  console.log("Found string:", out);
}
```

To print the entire array of objects:

```
let out = dsstrsrch.strsrch(null);
console.log(out);
```

The current method implementation supports searches for phrases in the form of "someword WHAT IS A COMPUTER? someword", "IS A COMPUTER", and "COMPUTER". However, it does not support searching for texts in the forms of "COMPUTER someword", "IS A someword COMPUTER", and "IS A COMPUTER someword" due to the limitations of the function, which uses the ```intents.json``` data.

```
Object: [
  {
    input_string_exist: 'someword what is a computer someword',
    request_string_found: 'what is a computer',
    substring_exist: true,
    inverse_substring_exist: false,
    requests_pattern_found: [ 'What is a computer?', 'What are the components of a computer?' ],
    responses_pattern_found: [
      'A computer is an electronic device that processes data.',
      'Components of a computer: CPU, RAM, storage, motherboard, power supply.'
    ],
    istrue: [Function: istrue],
    rstr: [Function: rstr],
    rpat: [Function: rpat],
    apat: [Function: apat]
  }
]
```

## Links

- npm: https://www.npmjs.com/package/dropsuit-strsrch

## Supporting DropSuit

DropSuit is an open-source library and I am dedicated to ensuring its continued development and improvement. If you have any questions, feedback, or encounter any issues, please reach out through the [support via PayPal](https://www.paypal.com/paypalme/dropsuit?country.x=GE&locale.x=en_US), and read more about [support details](https://github.com/ladooniani/dropsuit/blob/main/Support.md).

Your support is crucial for the library's success. You can also contribute to the project by submitting bug reports, feature requests, or by providing feedback. Sharing the library with others who may find it useful and giving it a star on GitHub are also great ways to show your support. Thank you for using DropSuit!

## License

[Apache License 2.0](LICENSE.txt)