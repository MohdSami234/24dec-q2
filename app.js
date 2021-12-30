//Assignment -5
//Q-2 take n from user and print first n prime numbers.

var n = prompt("enter the number");
n = parseInt(n);
var count =0;
let i=2;
 while(count<n){
         let fact=0;
         for(let j=1;j<=i;j++){
                 if(i%j==0){
                         fact++;
                 }
         }
         if(fact<=2){
                 count++;
                 console.log(i);
         }
         i++;
 }