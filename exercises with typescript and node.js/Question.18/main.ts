//Question.18

let placeToVisit :string[] = ['london', 'paris','new york','canada','italy'];

//print in original order.
console.log('Original order :', placeToVisit);


//print arry in alphabetical order without modifying the actual list.

console.log('Alphabetical order',placeToVisit.slice().sort());


// arry is still in its original order by printing it.

console.log('Original order :', placeToVisit);


//print arry in reverse alphabetical order without changing the order of the original list.

console.log('reverse alphabetical order:',placeToVisit.slice().sort().reverse());


// arry is still in its original order by printing it again.


console.log('Original order :', placeToVisit);


//Reverse the order of your list.  array to show that its order has changed.

console.log('reverse order changed');
placeToVisit.reverse();
console.log(placeToVisit);


//Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log('original order',placeToVisit.sort());
console.log(placeToVisit);



//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

console.log('reverse alphabetical order changed',placeToVisit.sort().reverse());
console.log(placeToVisit)







