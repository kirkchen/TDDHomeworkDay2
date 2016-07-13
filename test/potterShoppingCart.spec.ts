/// <reference path="../typings/index.d.ts" />

import * as chai from 'chai';
import { Book } from '../src/models/book';
import PotterShoppingCart from '../src/services/potterShoppingCart';

describe('PotterShoppingCart', function(){    
  describe('#Calculate()', function() {
    it('buy_one_first_episode_the_price_should_be_100', function () {
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
  });
});