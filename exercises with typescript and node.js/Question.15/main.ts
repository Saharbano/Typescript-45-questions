//Question.15
let list :string[] = ['laiba','hina','rabia'];

let unableAttend:string = list.splice(1,1)[0];

console.log(`${unableAttend} cant make dinner`);

list.push('sahar');
list.forEach(guest => {
    console.log(`Dear ${guest} you are cordially invited`)
})

