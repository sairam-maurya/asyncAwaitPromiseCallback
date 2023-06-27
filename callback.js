// function one(call_two){
//     console.log("step one")
//     call_two()
// }

// function two(){
//     console.log("step two")
// }

// one(two)


let stocks = {
    fruits:["strawberry","grapes","banana","apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
};


let order = (call_production)=>{
    console.log("order placed")
    call_production()
}

let production =()=>{
    console.log("production start")
}

order(production)