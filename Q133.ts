// Question133:Write a javaScript Object and convert it into a json string.
const Introduction = {
    name:"Asma",
    Age: 30,
    Country: "Pakistan",
    rollNo: 89,
};
const jsonString = JSON.stringify(Introduction);
console.log(jsonString);