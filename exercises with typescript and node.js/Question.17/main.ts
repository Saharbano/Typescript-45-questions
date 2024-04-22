//Question.17

let guestList:string[] = ['manal','mair','moosa'];
console.log('unfortunately! the new dinner table wont arrival so we can invite only 2 guest ');

guestList.unshift('mahmood','sahar');

console.log('updated list of guest', guestList);

while(guestList.length >2){
    let removedGuest :string | undefined = guestList.pop()
    if(removedGuest !== undefined){
        console.log(`Sorry,${removedGuest}, we cant invite you`);
    }
}

guestList.forEach(guest => console.log(`Dear ${guest}, you both are invited for the dinner`))

guestList.splice(0, guestList.length)

console.log('updated list of guest:',guestList);
