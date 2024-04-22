"use strict";
// 6.Stripping Names: Store a person’s name, and include some whitespace
//  characters at the beginning and end of the name.
//  Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, 
// so the whitespace around the name is displayed. Then print the name after striping the white spaces.
const personName = '\n\tQuaid-e-Azam\t\n';
console.log(personName);
const not_whitespace = personName.trim();
console.log(not_whitespace);
