/// <reference path="../typings/index.d.ts" />

import * as chai from 'chai';
import { Book } from '../src/models/book';
import PotterShoppingCart from '../src/services/potterShoppingCart';

describe('PotterShoppingCart', function(){    
  describe('#Calculate()', function() {
    it('Buy one first episode. The price should be 100', function () {
      //// arrange
      var books: Book[] = [
        { Episode: '1', Count: 1 }
      ];
      var expect = 100;      

      //// act
      var shoppingCart = new PotterShoppingCart();
      var actual = shoppingCart.Calculate(books);

      //// asert
      chai.assert.equal(expect, actual);
    })

    it('Buy one first episode and one second episode. The price should be 100 * 2 * 0.95 = 190', function(){
      //// arrange
      var books: Book[] = [
        { Episode: '1', Count: 1 },
        { Episode: '2', Count: 1 }
      ];
      var expect = 190;      

      //// act
      var shoppingCart = new PotterShoppingCart();
      var actual = shoppingCart.Calculate(books);

      //// asert
      chai.assert.equal(expect, actual);
    });

    it('Buy first three episode for one. The price should be 100 * 3 * 0.9 = 270', function(){
      //// arrange
      var books: Book[] = [
        { Episode: '1', Count: 1 },
        { Episode: '2', Count: 1 },
        { Episode: '3', Count: 1 },
      ];
      var expect = 270;      

      //// act
      var shoppingCart = new PotterShoppingCart();
      var actual = shoppingCart.Calculate(books);

      //// asert
      chai.assert.equal(expect, actual);
    });     

    it('Buy first four episode for one. The price should be 100 * 4 * 0.8 = 320', function(){
      //// arrange
      var books: Book[] = [
        { Episode: '1', Count: 1 },
        { Episode: '2', Count: 1 },
        { Episode: '3', Count: 1 },
        { Episode: '4', Count: 1 },
      ];
      var expect = 320;      

      //// act
      var shoppingCart = new PotterShoppingCart();
      var actual = shoppingCart.Calculate(books);

      //// asert
      chai.assert.equal(expect, actual);
    });

    it('Buy all episode for one. The price should be 100 * 5 * 0.75 = 375', function(){
      //// arrange
      var books: Book[] = [
        { Episode: '1', Count: 1 },
        { Episode: '2', Count: 1 },
        { Episode: '3', Count: 1 },
        { Episode: '4', Count: 1 },
        { Episode: '5', Count: 1 },
      ];
      var expect = 375;      

      //// act
      var shoppingCart = new PotterShoppingCart();
      var actual = shoppingCart.Calculate(books);

      //// asert
      chai.assert.equal(expect, actual);
    });

    it('Buy first and second episode for one and third episode for two. The price should be 100 * 3 * 0.9 + 100 = 370', function(){
      //// arrange
      var books: Book[] = [
        { Episode: '1', Count: 1 },
        { Episode: '2', Count: 1 },
        { Episode: '3', Count: 2 },        
      ];
      var expect = 370;      

      //// act
      var shoppingCart = new PotterShoppingCart();
      var actual = shoppingCart.Calculate(books);

      //// asert
      chai.assert.equal(expect, actual);
    });

    it('Buy first episode for one. Buy second and third episode for two. The price should be 100 * 3 * 0.9 + 100 * 2 * 0.95 = 460', function(){
      //// arrange
      var books: Book[] = [
        { Episode: '1', Count: 1 },
        { Episode: '2', Count: 2 },
        { Episode: '3', Count: 2 },        
      ];
      var expect = 460;      

      //// act
      var shoppingCart = new PotterShoppingCart();
      var actual = shoppingCart.Calculate(books);

      //// asert
      chai.assert.equal(expect, actual);
    });
  });
});