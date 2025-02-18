const users = [
    { id: 1, name: "Alice", email: "alice@email.com" },
    { id: 2, name: "Bob", email: "bob@email.com" },
  ];
  
  const orders = [
    { orderId: 101, userId: 1, total: 250 },
    { orderId: 102, userId: 2, total: 400 },
    { orderId: 103, userId: 1, total: 100 },
  ];
//the output shloud look like this-->

//   [
//     { id: 1, name: "Alice", email: "alice@email.com", orders: [{ orderId: 101, total: 250 }, { orderId: 103, total: 100 }] },
//     { id: 2, name: "Bob", email: "bob@email.com", orders: [{ orderId: 102, total: 400 }] }
//   ]
  
  function combineObj(users, orders) {
    return users.map((user) => {
        const withUseridMatch = orders.filter((order) => order.userId == user.id);

        return {
            ...user,
            orders: withUseridMatch.map((order) => ({
                orderId: order.orderId,
                total: order.total
            }))
        };
    });
}

const combinedData = combineObj(users, orders);
console.log(JSON.stringify(combinedData, null, 3));

// followup:write it on More Optimizes way possible

// Write a function getMostExpensiveProduct(products) that returns the product with the highest price.


const products = [
  { id: 101, name: "Laptop", price: 1200 },
  { id: 102, name: "Phone", price: 800 },
  { id: 103, name: "Tablet", price: 500 },
];


const productofHighValue =(products)=>{
return    products.reduce((max, item) => Math.max(max, item.price), -Infinity);





}
console.log(productofHighValue(products))


// You have a list of students with their grades.

// Write a function groupStudentsByGrade(students) that groups students based on their grades.

// const students = [
//     { id: 1, name: "Alice", grade: "A" },
//     { id: 2, name: "Bob", grade: "B" },
//     { id: 3, name: "Charlie", grade: "A" },
//     { id: 4, name: "David", grade: "C" },
//   ];
//   Expected Output:
//   js
//   Copy
//   Edit
//   {
//     "A": [{ id: 1, name: "Alice" }, { id: 3, name: "Charlie" }],
//     "B": [{ id: 2, name: "Bob" }],
//     "C": [{ id: 4, name: "David" }]
// 5️⃣ Simulating an API Response for Orders (Async Function)
// A company wants to fetch orders from a database asynchronously.

// Task
// Write an async function fetchOrders() that simulates fetching orders from an API after 2 seconds using setTimeout().

// Output Example:
// js
// Copy
// Edit
// [
//   { orderId: 1, product: "Laptop", amount: 1200 },
//   { orderId: 2, product: "Phone", amount: 800 }
// ]

const fetchOrder = ()=>{

return new Promise((resolve)=>{

setTimeout(()=>{
resolve([
    { orderId: 1, product: "Laptop", amount: 1200 },
     { orderId: 2, product: "Phone", amount: 800 }

])

},2000)


})


}
fetchOrder().then(orders=>console.log(orders))