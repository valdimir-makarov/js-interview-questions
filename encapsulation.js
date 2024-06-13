

const first=(data)=>{

     return{
  setPassword:()=>{
  return  password=data
  },
  validatePassword:(val)=>{
  return password===val
  }



     }
}
const manager = first('bubu')
console.log(manager.setPassword())
console.log(manager.validatePassword('bubu'))
