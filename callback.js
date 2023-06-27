// function one(call_two){
//     console.log("step one")
//     call_two()
// }

// function two(){
//     console.log("step two")
// }

// one(two)


let stocks = {
    fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
};


let order = (fruit_name, call_production) => {

    setTimeout(() => {
        console.log(`${stocks.fruits[fruit_name]} was selected`)
        call_production()

    }, 2000)

}

let production = () => {
    setTimeout(() => {
        console.log("production started")
        setTimeout(() => {
            console.log("the fruit had been chopped")
            setTimeout(() => {
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)

                setTimeout(() => {
                    console.log("the machine had been started")
                    setTimeout(() => {
                        console.log(`${stocks.holder[0]} was selected`)
                        setInterval(() => {
                            console.log(`${stocks.toppings[0]} was added`)
                            setTimeout(() => {
                                console.log("serve icecream")
                            }, 2000)
                        }, 3000)
                    },2000)
                },1000)
                
                 }, 1000)

        }, 2000)


    })

}

order("0", production)