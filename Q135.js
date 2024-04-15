"use strict";
// Question135:Explain how you can format a JSON string with proper identation for readability.
const Intro = {
    name: "Haya",
    age: "8",
    city: "wonderland",
};
const jsonstring2 = JSON.stringify(Intro, null, 2);
console.log(jsonstring2);
