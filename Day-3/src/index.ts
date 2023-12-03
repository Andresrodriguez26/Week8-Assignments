class Item {

    public readonly id:string

    constructor(public name: string,
                public price: number,
                public description: string){
                    this.id = uuid()}
}


class User {

    private readonly _id: string

    public get id_1(): string {
        return this._id
    }

    // cart: Item[] = []
    cart: { [itemName: string]: Item } = {};


    constructor(public name: string,
                public age: number){
                    this._id = uuid()}
                
    // addToCart(item:Item): void {
    //     this.cart.push(item)
    // }

    addToCart(itemName: string, item: Item): void {
        this.cart[itemName] = item;
    }
    
    // removeFromCart(item:Item, user:User): void {
    //     user.cart = user.cart.filter((cartItem) => cartItem.id !== item.id)
    // }

    removeFromCart(): void {
    
       let itemDelete: string = rl.question("What item would you like to delete?: ")

        if (itemDelete in this.cart){
            delete this.cart[itemDelete]
            console.log(`${itemDelete} was removed from your cart `)
        } else {
            console.log(`${itemDelete} was not found in your cart, please check your items `)
        }

        
    }
    
    printCart(user:User): void {
        console.log(`Your Cart: `)
        user.cart.forEach((item) => {
            console.log(`${item.name} with of Price: $${item.price}`)
        })
    }

}

import { v4 as uuid } from "uuid"
import * as rl from 'readline-sync'


function createUser(): User {
   let name:string = ""
   let age:number = 0

   name = rl.question("Please enter the name of the user: ")

   while(true){ 
    
    age = parseInt(rl.question("Enter your age: "))
    
    // // Validate age input
    if (isNaN(age)) {
        console.log("Invalid age. Please enter a valid number.");
    }

    else{
        break
    }
    
}
    return  new User(name, age)
}

console.log(createUser())

function createItem(): Item {
    let name: string = ""
    let price: number = 0
    let description: string = ""

    name = rl.question("Please enter the name of the item: ")
    description = rl.question("Please enter a description for your item")

    while(true){ 
    
        price = parseInt(rl.question("Enter the price: "))

        // // Validate age input
        if (isNaN(price)) {
            console.log("Invalid price. Please enter a valid price.");
        }
    
        else{
            break
        }
        
    }
        return new Item (name, price, description)
    }

console.log(createItem())
   

//  ------------------------- New Driver ----------------------------

function driverCode() {
    const _user = createUser()

    while (true) {
        const _response: string = rl.question("What would you like to do? add, delete, view ")

        if (_response.toLowerCase() == "add") {
                let newItem = createItem()
            _user.addToCart(newItem, Item)
        }
        else if (_response.toLowerCase() == "delete") {
            _user.removeFromCart();
        } else if (_response.toLowerCase() == "view") {
            _user.printCart();
        } else if (_response.toLowerCase() == "quit") {
            break;
        } else {
            console.log("Please enter a valid response");
        }
    }

}

console.log(driverCode())


// ----------------- Driver Code --------------------- // 

// let user = createUser("Andres Rodriguez", 25)

// let firstItem = createItem("Apple", 2.99, "Red and Juicy")
// let secondItem = createItem("Orange Fanta", 4.99, "Orange and Tasty")
// let thirdItem = createItem("Pencil", 0.99, "Sharp")

// addToCart(firstItem, user)

// printCart(user)

// let total = 0 

// for (let item of user.cart) {
//    total += item.price
// }

// let _total = total.toFixed(2)
// console.log(`First Total: $${_total}`)

// addToCart(firstItem, user)
// addToCart(secondItem, user)
// addToCart(thirdItem, user)

// let secondTotal = 0

// for (let item of user.cart) {
//     secondTotal += item.price
// }

// let newTotal = secondTotal.toFixed(2);
// console.log(`New Total: $${newTotal}`);

// removeFromCart(firstItem, user)
// removeFromCart(secondItem, user)
// removeFromCart(thirdItem, user)

// printCart(user)

// let finalTotal = 0

// for (let item of user.cart) {
//   finalTotal += item.price;
// }

// let formattedTotal = finalTotal.toFixed(2);
// console.log(`Final Total: $${formattedTotal}`);