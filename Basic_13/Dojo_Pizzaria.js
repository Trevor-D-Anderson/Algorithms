var pizza = {
    crustType: ["deep dish", "hand tossed", "thin crust"],
    sauceType: ["traditional", "marinara", "White sauce"],
    cheeses: ["Mozzarella", "feta","cheddar"],
    toppings: ["pepperoni", "sausage", "mushrooms", "olives", "onions"]
}
function pizzaOven(crust, sauce, cheese, toppings){
    var pizza = {}
    pizza.crustType = crust;
    pizza.sauceType = sauce;
    pizza.cheeses = cheese;
    pizza.toppings = toppings;
    return pizza;
}

var meatLovers = pizzaOven("deep dish", "traditional", "mozzarella", ["pepperoni", "sausage"])
var theVeggie = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"])
var myPizza = pizzaOven("deep dish", "traditional", "mozzarella", ["sausage", "olives", "onions"])
var bigWhite = pizzaOven("hand tossed", "white sauce", "mozzarella", ["sausage", "mushrooms"])
// console.log(meatLovers)
// console.log(theVeggie)
// console.log(myPizza)
// console.log(bigWhite) 

function randomPizza(arr){

    var randomIndex = Math.floor(Math.random() * arr.length);
    var item = arr[randomIndex];
    return item
}
var randomCrust = randomPizza(pizza.crustType)
var randomSauce = randomPizza(pizza.sauceType)
var randomCheese = randomPizza(pizza.cheeses)
var randomToppings = randomPizza(pizza.toppings)
console.log(pizzaOven(randomCrust, randomSauce, randomCheese, randomToppings))