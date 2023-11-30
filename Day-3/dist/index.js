"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Item {
    constructor(id, name, price, description) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
    }
}
class User {
    constructor(id, name, age, cart) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.cart = cart;
    }
}
const uuid_1 = require("uuid");
function createUser(name, age) {
    let user = {
        id: (0, uuid_1.v4)(),
        name,
        age,
        cart: []
    };
    return user;
}
function createItem(name, price, description) {
    let item = {
        id: (0, uuid_1.v4)(),
        name,
        price,
        description
    };
    return item;
}
function addToCart(item, user) {
    user.cart.push(item);
}
function removeFromCart(item, user) {
    user.cart = user.cart.filter((cartItem) => cartItem.id !== item.id);
}
function printCart(user) {
    console.log(`Your Cart`);
    user.cart.forEach((item) => {
        console.log(`${item.name} & Price: ${item.price}`);
    });
}
// ----------------- Driver Code --------------------- // 
let user = createUser("Andres Rodriguez", 25);
let firstItem = createItem("Apple", 2.99, "Red and Juicy");
let secondItem = createItem("Orange Fanta", 4.99, "Orange and Tasty");
let thirdItem = createItem("Pencil", 0.99, "Sharp");
addToCart(firstItem, user);
printCart(user);
let total = 0;
for (let item of user.cart) {
    total += item.price;
}
let _total = total.toFixed(2);
console.log(`First Total: $${_total}`);
addToCart(firstItem, user);
addToCart(secondItem, user);
addToCart(thirdItem, user);
let secondTotal = 0;
for (let item of user.cart) {
    secondTotal += item.price;
}
let newTotal = secondTotal.toFixed(2);
console.log(`New Total: $${newTotal}`);
removeFromCart(firstItem, user);
removeFromCart(secondItem, user);
removeFromCart(thirdItem, user);
printCart(user);
let finalTotal = 0;
for (let item of user.cart) {
    finalTotal += item.price;
}
let formattedTotal = finalTotal.toFixed(2);
console.log(`Final Total: $${formattedTotal}`);
