'use strict'
console.log("for:");
console.log("---------------");
for(let i = 0; i<10; i++){
console.log("i="+ i);
}

let i = 0;
console.log("");
console.log("while: ");
console.log("---------------");
while (i< 10){  
    if (i%2 !=0){ 
console.log("i= " + i);
    }
i++;
}

i=0;
console.log("");
console.log("do .. while: ");
console.log("---------------");
do{
    if (i>0 & i%2 ==0){
        console.log("Bingo!");
    
    }
    console.log("i= " + i);
    i++;
} while(i<10);