
let user = prompt('Söz daxil edin:')

let string =reverse(user)
console.log(string);

function reverse(sent){
    let newstring="";

    for (let i = sent.length-1; i >=0; i-- ) {
        newstring += sent[i]
    }
    return newstring;
}

  

