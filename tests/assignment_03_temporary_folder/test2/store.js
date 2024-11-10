// store.js
const itemArray = [
    { name: 'Chicken', price: 100, marks: 4.5, intro: 'this is a chicken.', count: 0, itemClass: 'Staple_Food' },
    { name: 'Coke', price: 20, marks: 4.5, intro: 'this is a coke.', count: 0, itemClass: 'Drinks' },
    { name: 'Cake', price: 100, marks: 4.5, intro: 'this is a cake.', count: 0, itemClass: 'Dessert' },
    { name: 'Beef', price: 150, marks: 4.5, intro: 'this is a beef.', count: 0, itemClass: 'Staple_Food' },
    { name: 'Cheese', price: 50, marks: 4.5, intro: 'this is a cheese.', count: 0, itemClass: 'Dessert' },
    { name: 'Lamb', price: 120, marks: 4.5, intro: 'this is a lamb.', count: 0, itemClass: 'Staple_Food' },
    { name: 'WongWong', price: 10, marks: 4.5, intro: 'this is a WongWong drink.', count: 0, itemClass: 'Drinks' },
    { name: 'Cookie', price: 30, marks: 4.5, intro: 'this is a cookie.', count: 0, itemClass: 'Dessert' }
];

// Function to add item to cart
function add_item(itemName, count) {
    const result = itemArray.find(item => item.name === itemName);
    if (result) {
        result.count = parseInt(count);
        return result;
    } else {
        return null;
    }
}

// Function to get items in the cart
function get_items_in_cart() {
    return itemArray.filter(item => item.count > 0);
}

module.exports = { itemArray, add_item, get_items_in_cart };