//Question.18
let placeToVisit = ['london', 'paris', 'new york', 'canada', 'italy'];
//print in original order.
console.log('Original order :', placeToVisit);
//print arry in alphabetical order without modifying the actual list.
console.log('Alphabetical order', placeToVisit.slice().sort());
// arry is still in its original order by printing it.
console.log('Original order :', placeToVisit);
//print arry in reverse alphabetical order without changing the order of the original list.
console.log('reverse alphabetical order:', placeToVisit.slice().sort().reverse());
// arry is still in its original order by printing it.
console.log('Original order :', placeToVisit);
export {};
