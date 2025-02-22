// . How can you clone an object in JavaScript?

const orginalObj = {

    name:"bubu"
}

const cloneObj= Object.assign({},orginalObj)
const secondObj ={...cloneObj}

const result =JSON.parse(JSON.stringify(secondObj))
console.log(result)


// 5. What will be the output of the following code?

for (var i = 0; i < 3; i++) {
    setTimeout(function() {
      console.log(i);
    }, 1000);
  }

// this because the var is  function scoped
// it creats a single varibale and stores the output



for(let i = 0;i<4;i++){
    setTimeout(()=>{
        console.log(i)
    },1000)
}
//let is blocked scoped meaning it creats a one varibale in each 
//iterations
const person = {
    name: 'Carol',
    greet: function() {
      console.log(`Hello, my name is ${this.name}`);
    }
  };
  
  const greet =person.greet;
  greet(); // Hello, my name is undefined
  
  const boundGreet = person.greet.bind(person);
  boundGreet(); // Hello, my name is Carol
  
  