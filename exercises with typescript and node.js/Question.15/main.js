//Question.15
let list = ['laiba', 'hina', 'rabia'];
let unableAttend = list.splice(1, 1)[0];
console.log(`${unableAttend} cant make dinner`);
list.push('sahar');
list.forEach(guest => {
    console.log(`Dear ${guest} you are cordially invited`);
});
export {};
