// store.test.js
const { add_item, get_items_in_cart, itemArray } = require('./store');

describe('Store functionality', () => {
    beforeEach(() => {
        // Reset the item counts before each test
        itemArray.forEach(item => item.count = 0);
    });

    test('should add an item to the cart', () => {
        const addedItem = add_item('Chicken', 2);
        expect(addedItem).toBeDefined();
        expect(addedItem.count).toBe(2);
    });

    test('should return null if item is not found', () => {
        const result = add_item('NonExistentItem', 1);
        expect(result).toBeNull();
    });

    test('should get items in the cart', () => {
        add_item('Chicken', 2);
        add_item('Coke', 1);
        const cartItems = get_items_in_cart();
        expect(cartItems.length).toBe(2);
        expect(cartItems[0].name).toBe('Chicken');
        expect(cartItems[1].name).toBe('Coke');
    });

    test('should return an empty array if no items are in the cart', () => {
        const cartItems = get_items_in_cart();
        expect(cartItems.length).toBe(0);
    });
});