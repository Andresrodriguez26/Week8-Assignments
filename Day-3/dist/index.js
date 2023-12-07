"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
class Item {
    name;
    price;
    description;
    id;
    constructor(name, price, description) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.id = (0, uuid_1.v4)();
    }
}
class User {
    name;
    age;
    _id;
    get id_1() {
        return this._id;
    }
    // cart: Item[] = []
    cart = {};
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this._id = (0, uuid_1.v4)();
    }
    // addToCart(item:Item): void {
    //     this.cart.push(item)
    // }
    addToCart(item) {
        this.cart[item.name] = item;
    }
    // removeFromCart(item:Item, user:User): void {
    //     user.cart = user.cart.filter((cartItem) => cartItem.id !== item.id)
    // }
    removeFromCart() {
        let itemDelete = rl.question("What item would you like to delete?: ");
        if (itemDelete in this.cart) {
            delete this.cart[itemDelete];
            console.log(`${itemDelete} was removed from your cart `);
        }
        else {
            console.log(`${itemDelete} was not found in your cart, please check your items `);
        }
    }
    // printCart(user:User): void {
    //     console.log(`Your Cart: `)
    //     user.cart.forEach((itemName) => {
    //         console.log(`${item.name} with of Price: $${item.price}`)
    //     })
    // }
    printCart(user) {
        console.log(`Your Cart: `);
        Object.values(user.cart).forEach((item) => {
            console.log(`${item.name} with a price of $${item.price}`);
        });
    }
}
const uuid_1 = require("uuid");
const rl = __importStar(require("readline-sync"));
function createUser() {
    let name = "";
    let age = 0;
    name = rl.question("Please enter the name of the user: ");
    while (true) {
        age = parseInt(rl.question("Enter your age: "));
        // // Validate age input
        if (isNaN(age)) {
            console.log("Invalid age. Please enter a valid number.");
        }
        else {
            break;
        }
    }
    return new User(name, age);
}
console.log(createUser());
function createItem() {
    let name = "";
    let price = 0;
    let description = "";
    name = rl.question("Please enter the name of the item: ");
    description = rl.question("Please enter a description for your item");
    while (true) {
        price = parseInt(rl.question("Enter the price: "));
        // // Validate age input
        if (isNaN(price)) {
            console.log("Invalid price. Please enter a valid price.");
        }
        else {
            break;
        }
    }
    return new Item(name, price, description);
}
console.log(createItem());
//  ------------------------- New Driver ----------------------------
function driverCode() {
    const _user = createUser();
    while (true) {
        const _response = rl.question("What would you like to do? add, delete, view ");
        if (_response.toLowerCase() == "add") {
            let newItem = createItem();
            _user.addToCart(newItem);
        }
        else if (_response.toLowerCase() == "delete") {
            _user.removeFromCart();
        }
        else if (_response.toLowerCase() == "view") {
            _user.printCart(_user);
        }
        else if (_response.toLowerCase() == "quit") {
            break;
        }
        else {
            console.log("Please enter a valid response");
        }
    }
}
console.log(driverCode());
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
