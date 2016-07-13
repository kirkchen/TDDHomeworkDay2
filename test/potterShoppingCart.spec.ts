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

    it('buy_ond_first_episode_and_buy_one_second_episode_the_price_should_be_100*2*0.95=190', function(){
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

    it('buy_ond_first_episode_and_buy_one_second_episode_and_buy_one_third_episode_the_price_should_be_100*3*0.9=270', function(){
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

    it('buy_first_four_episode_the_price_should_be_100*4*0.8=320', function(){
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

    it('buy_all_episode_the_price_should_be_100*5*0.75=375', function(){
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
  });
});