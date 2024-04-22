//Question.16
let list = ['laiba', 'rabai', 'sahar', 'hassan'];
console.log('Great News! we found abigger table');
list.unshift('Amaan');
list.splice(Math.floor(list.length / 2), 0, 'furqan');
list.push('M.saad');
list.forEach(guest => {
    console.log(`Dear ${guest}, you all are cordially inviter to dinner`);
});
export {};
// console.log(list)
