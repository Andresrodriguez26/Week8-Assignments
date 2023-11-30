class Item {
    constructor(public readonly id:string,
                public name: string,
                public price: number,
                public description: string){}
}


class User {
    constructor(public readonly id:string,
                public name: string,
                public age: number,
                public cart: Item[]){}
}

import { v4 as uuid } from "uuid"

function createUser(name:string, age:number): User {
    
    let user: User = {
        id: uuid(),
        name,
        age,
        cart:[]
    }
    return user
}

function createItem(name:string, price:number, description:string): Item {
    
    let item: Item = {
        id: uuid(),
        name,
        price,
        description
    }
    return item
}

function addToCart(item:Item, user:User): void {
    user.cart.push(item)
}

function removeFromCart(item:Item, user:User): void {
    user.cart = user.cart.filter((cartItem) => cartItem.id !== item.id)
}

function printCart(user:User): void {
    console.log(`Your Cart: `)
    user.cart.forEach((item) => {
        console.log(`${item.name} with of Price: $${item.price}`)
    })
}


// ----------------- Driver Code --------------------- // 

let user = createUser("Andres Rodriguez", 25)

let firstItem = createItem("Apple", 2.99, "Red and Juicy")
let secondItem = createItem("Orange Fanta", 4.99, "Orange and Tasty")
let thirdItem = createItem("Pencil", 0.99, "Sharp")

addToCart(firstItem, user)

printCart(user)

let total = 0 

for (let item of user.cart) {
   total += item.price
}

let _total = total.toFixed(2)
console.log(`First Total: $${_total}`)

addToCart(firstItem, user)
addToCart(secondItem, user)
addToCart(thirdItem, user)

let secondTotal = 0

for (let item of user.cart) {
    secondTotal += item.price
}

let newTotal = secondTotal.toFixed(2);
console.log(`New Total: $${newTotal}`);

removeFromCart(firstItem, user)
removeFromCart(secondItem, user)
removeFromCart(thirdItem, user)

printCart(user)

let finalTotal = 0

for (let item of user.cart) {
  finalTotal += item.price;
}

let formattedTotal = finalTotal.toFixed(2);
console.log(`Final Total: $${formattedTotal}`);