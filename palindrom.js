


// palindrime checking

let str = "sourav"
console.log(palindrimeChecking(str));

function palindrimeChecking(str) {
    let bag ="";
    for(let i =str.length-1;i>=0;i--){
        bag += str[i];
    }
    // console.log(bag);
    if(bag===str){
        return true;
    }
    return false;
    
}
