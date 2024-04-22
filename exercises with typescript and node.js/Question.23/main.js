/*Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
 */
//test # 1
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');
//test # 2
console.log("Is car == 'toyota'? I predict false.");
console.log(car == 'toyota');
//test # 3
console.log("Is car === 'subaru'? I predict True");
console.log(car === 'subaru');
//test 4
console.log("Is car === 'subaru'? I predict False");
console.log(car === 'subaru');
//test 5
console.log('Is car.length > 0? I predict true');
console.log(car.length > 0);
// test 6
console.log('Is car.length < 5? I predict false');
console.log(car.length < 5);
//test 7
console.log("is car.toUpperCase() === 'SUBARU' ? i predict true");
console.log(car.toUpperCase() === 'SUBARU');
//test
console.log("is car.toUpperCase() === 'subaru' ? i predict true");
console.log(car.toUpperCase() === 'subaru');
//test 9
console.log("is car.toLowerCase() === 'subaru' ? i predict true");
console.log(car.toLowerCase() === 'subaru');
//test 10
console.log("is car.includes('u')? I predict true");
console.log(car.includes('u'));
export {};
