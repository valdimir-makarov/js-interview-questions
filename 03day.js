// 1️⃣ Simulating a Food Delivery System

// You need to build a food delivery app that handles:

// Placing an order (Async API call simulation).

// Tracking delivery (Set intervals to check status).

// Sending notifications (Using microtasks).

// Task:

// Simulate placing an order (e.g., "Pizza ordered").

// After 3 seconds, confirm order completion using setTimeout().

// Every 1 second, update the delivery status using setInterval().

// After the order is delivered, resolve a Promise and log "Order delivered!".

function placeOrder (){
    console.log("pizza ordered");
     return new Promise((resolve)=>{

      setTimeout(()=>{
console.log("oder is confirmed"),
 trackDilveryTime().then(()=>{
    console.log("🎉 Order delivered!");
resolve()

 }


)

      },3000)


     })





}

function trackDilveryTime(){

    return new Promise((resolve)=>{
       let status = ["🚗 On the way", "🏡 Almost there", "📦 Delivered"];
    let index = 0;
     let interval = setInterval(()=>{
     console.log(status[index])
     index++
   
    if(status.length ==index){
   clearInterval(interval)
   queueMicrotask(() => console.log("🔔 Notification: Your order has arrived!"));
   resolve()
   
    }
   
     },1000
   )
   
   
   
   

   
    })
}
placeOrder()