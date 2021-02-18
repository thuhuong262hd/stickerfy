const Cart = require('../../models/cart');
const Product = require('../../models/product');
const assert = require('assert');

let cart;
let product;

describe('Shopping cart', function() {

  describe('shopping cart model', () => {

    beforeEach(() => {
      cart = new Cart({});
      product = new Product({
        "imagePath": "https://buildahead.com/wp-content/uploads/2017/02/happy-emoji-smaller.png",
        "title": "Happy",
        "description": "Happy",
        "price":5});
    });

    it('adds a sticker to the cart', function() {      
      cart.add(product, product.id);
      assert.equal(cart.totalPrice, 5);
    });

    it('removes a sticker from the cart', function() {
      cart.add(product, product.id);
      cart.reduceByOne(product.id);
      assert.deepEqual(cart.items, {});
      assert.equal(cart.totalPrice, 0);
    });

    it('remove all quantities of sticker from the cart', function() {
      cart.add(product, product.id);
      cart.add(product, product.id);
      cart.removeItem(product.id);
      assert.deepEqual(cart.items, {});
      assert.equal(cart.totalPrice, 0);
    });

    it('returns an empty array', function() {
      assert.deepEqual(cart.generateArray(),[]);
    });
  });
});
