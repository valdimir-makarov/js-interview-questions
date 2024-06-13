const  first =()=>{


     let x = 10
       function inner(){
       
         return x

       }
       x=20
        return inner()
}
 const res=()=>first()
console.log(res())