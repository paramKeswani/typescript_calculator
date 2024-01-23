

// const readline = require('readline');
// rl.question('What is your age? ', (age) => {
//     console.log('Your age is: ' + age);
// });

import * as readlineSync from 'readline-sync';

// create interface for input and output
let start:boolean = true;

// create empty user input
function getUserInputInt(): any {
   return readlineSync.question('Enter Number: ');
}

// const userInput1: any = getUserInputInt();
// const userInput2: any = getUserInputInt();
// console.log(`You entered: ${userInput}`);

function addition(x:number,y:number): number {
   return x+y;
}

function subtraction(x:number,y:number): number {
   return x-y;
}

function multiplication(x:number,y:number): number {
   return x*y;
}

function division(x:number,y:number): number {
   return x/y;
}

function modulo(x:number,y:number): number {
   return x % y;
}

function concateString(x:string,y:string): string {
   return x+y;
}

// const userInput1: number = getUserInputInt();

while(start)
{
   var operation: any = parseFloat(getUserInputInt()); 
switch(operation) { 
   case 1: { 


      console.log("addition"); 
      const userInput1: number = parseFloat(getUserInputInt());
      const userInput2: number = parseFloat(getUserInputInt());
// console.log(`You entered: ${userInput}`);

const result = addition(userInput1,userInput2);
console.log(result);      
break; 
   } 
   case 2: { 
      console.log("Multiplication"); 
      const userInput1: number = parseFloat(getUserInputInt());
      const userInput2: number = parseFloat(getUserInputInt());
// console.log(`You entered: ${userInput}`);

const result = multiplication(userInput1,userInput2);
console.log(result);      
break; 
   } 
   case 3: {
      console.log("Division"); 
      const userInput1: number =parseFloat( getUserInputInt());
      const userInput2: number = parseFloat(getUserInputInt());
// console.log(`You entered: ${userInput}`);

 const result = division(userInput1,userInput2);
 console.log(result);
      break;    
   } 
   case 4: { 
      console.log("subtraction");
      const userInput1: number = parseFloat(getUserInputInt());
      const userInput2: number =parseFloat( getUserInputInt());
// console.log(`You entered: ${userInput}`);

const result = subtraction(userInput1,userInput2);
console.log(result);
       
      break; 
   }
   case 5: { 
      console.log("String concate");
      const userInput1: string = getUserInputInt();
      const userInput2: string = getUserInputInt();
// console.log(`You entered: ${userInput}`);

const result = concateString(userInput1,userInput2);
console.log(result); 
break;  
}


case 6: { 
   console.log("exit");
    start = false;

       
      break; 
   }  
   default: { 
      console.log("Invalid choice"); 
      break;              
   } 
}
   
}
