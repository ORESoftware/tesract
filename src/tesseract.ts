'use strict';

export const foo = 'bar';

export const r2gSmokeTest = function () {
  // r2g command line app uses this exported function
  return true;
};

const tesseract = require("node-tesseract-ocr");

const config = {
  lang: "eng",
  l: 'eng',
  oem: 1,
  psm: 3,
};

tesseract.recognize('/home/oleg/codes/oresoftware/tesract/funny-text.jpg', config)
  .then((text:any) => {
    console.log("Result:", text)
  })
  .catch((e: any) => {
    console.log(e.message)
  });


