//#region Dysplay info data

function displayInfoData() {
  const liblink =
    "DropSuit: https://github.com/ladooniani/DropSuit#readme\n" +
    "Copyright © 2016-" +
    getYear() +
    " Lado Oniani - DropSuit. All Rights Reserved.\n\n";
  const libName = "DropSuit NLP module library function:\n";
  const line =
    "\n———————————————————————————————————————————————————————————\n\n";
  const divider =
    "\n-----------------------------------------------------------\n";
  const libraryInformation = line + liblink + libName;
  const functionDescription = `${libraryInformation}
  strsrch(null/string)
  Input:
  string (Input 'myInputString'), or
  null (to process the constructor input)
  Purpose: To search the question/answer by equality or substrings inverse content matching.
  
  Output:
  istrue(): Returns 'true' if a match is found, otherwise returns 'false'.
  rstr(): Returns the exact, partial, or inverse partial match if it exists.
  rpat(): Returns the request pattern if a match is found.
  apat(): Returns the response pattern if a match is found.
  ${divider}`;

  const displayInfoData = {
    descript: functionDescription,
    line: line,
  };

  return displayInfoData;
}

function getYear() {
  return new Date().getFullYear();
}

//#endregion

//#region Modules

module.exports = {
  displayInfoData,
};

//#endregion
