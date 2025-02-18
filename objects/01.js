// Write a function getUserById(id) that searches for a user by ID and returns their details.
// Modify the function to return "User not found" if the ID does not exist.
const users = [
    { id: 1, name: "Alice", age: 25, email: "alice@email.com" },
    { id: 2, name: "Bob", age: 30, email: "bob@email.com" },
    { id: 3, name: "Charlie", age: 28, email: "charlie@email.com" }
  ];

  

  const Search = (id)=>{
const user = users.find((user)=>user.id = id);
 if(users===true){
   return user 
 }
 else{
    return {
        "message":"user didnot match"
    }
 }

 }

   console.log(Search(10));
//  2)  Write a function updateStock(productId, newStock) that updates the stock of a product.
   const products = [
    { id: 101, name: "Laptop", price: 1200, stock: 10 },
    { id: 102, name: "Phone", price: 800, stock: 5 },
    { id: 103, name: "Tablet", price: 500, stock: 0 }
  ];

  function updateStock(productId,newStock){
  const foundObj
  =  products.find(product=>product.id==productId)
  if(foundObj){
     foundObj.stock =100
  return foundObj
  }
  else{
    return {
        "message":"prduct didnt matched"
    }
  }


  }
console.log(updateStock(101))

  

//  3)Write a function getPendingOrders() that returns only orders with status "pending".


 const orders = [
    { orderId: 1, userId: 101, status: "delivered" },
    { orderId: 2, userId: 102, status: "pending" },
    { orderId: 3, userId: 103, status: "shipped" },
    { orderId: 4, userId: 101, status: "pending" }
  ];
  function getPendingOrders(){
   const obj =   orders.filter(order=>order.status=="pending")
   return obj
  }
  console.log(getPendingOrders());

//   4)Write a function calculateTotalSales() that returns the total revenue (sum of quantity * price for all sales).
//   5)Modify the function to group sales by productId and return total revenue per product.
  
  const sales = [
    { productId: 101, quantity: 3, price: 1200 },
    { productId: 102, quantity: 1, price: 800 },
    { productId: 103, quantity: 2, price: 500 },
    { productId: 101, quantity: 1, price: 1200 }
  ];
  function calculateTotalSales() {
    return sales.reduce((acc, sale) => acc + sale.quantity * sale.price, 0);
}

function revenue(){
return sales.reduce((acc,sale)=>{
    if (!acc[sale.productId]) {
        acc[sale.productId] = 0; 
      }
acc[sale.productId] = acc[sale.productId] + sale.quantity * sale.price
return acc;
 },{})


}
console.log(revenue())
console.log(calculateTotalSales());


// 5. Normalizing a Nested Database Response
// A database query returns user data with nested addresses, but you need to extract the address separately for easier use:
const useres = [
    { id: 1, name: "Alice", address: { street: "123 Main St", city: "New York", zip: "10001" } },
    { id: 2, name: "Bob", address: { street: "456 Elm St", city: "Los Angeles", zip: "90001" } },
    { id: 3, name: "Charlie" } // No address
  ];





// js
// Copy
// Edit
const person = [
  {
    id: 1,
    name: "Alice",
    address: { street: "123 Main St", city: "New York", zip: "10001" }
  },
  {
    id: 2,
    name: "Bob",
    address: { street: "456 Elm St", city: "Los Angeles", zip: "90001" }
  }
];


function extractAddresses(person){
   const result = person.filter((item)=>item.address).map((user)=>({
userId:user.id,
     address:user.address,
     city:user.city
})

)

     







return result


}
console.log(extractAddresses(person))



// Tasks:
// Write a function extractAddresses(users) that returns an array of addresses like this:
// js
// Copy
// Edit
// [
//   { userId: 1, street: "123 Main St", city: "New York", zip: "10001" },
//   { userId: 2, street: "456 Elm St", city: "Los Angeles", zip: "90001" }
// ]
// Modify the function to handle cases where a user does not have an address.
// Bonus Challenge 💡
// Try writing these functions as async functions to simulate real database operations (e.g., using setTimeout to mimic API calls).