 const  first=(a)=>{


     return function second(b){
        return a+b;

     }
 }


const result  = first(1)(2)
console.log(result)