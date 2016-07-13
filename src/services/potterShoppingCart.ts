/// <reference path="../../typings/modules/lodash/index.d.ts" />

import { Book } from '../models/book';
import { DiscountRule } from '../models/discountRule';
import * as _ from 'lodash';

export default class PotterShoppingCart {
    DiscountRule: DiscountRule[] = [
        { Count: 1, DiscountRate: 1 },
        { Count: 2, DiscountRate: 0.95 },
        { Count: 3, DiscountRate: 0.9 },
        { Count: 4, DiscountRate: 0.8 },
        { Count: 5, DiscountRate: 0.75 },
    ]

    Calculate(books: Book[]): number {        
        var bookGroupCounts: number[] = [];

        //// Group books count by episode series
        while (_.sumBy(books, 'Count') > 0) {
            let bookGroupCount = 0;

            for (var book of books) {
                if (book.Count > 0) {
                    book.Count--;
                    bookGroupCount++;
                }
            }

            bookGroupCounts.push(bookGroupCount);
        }        

        //// Calculate each series' price
        var prices = bookGroupCounts.map((count) => {            
            let discountRate = _.find(this.DiscountRule, ['Count', count]);
            let price = count * 100 * discountRate.DiscountRate;

            return price;
        });

        //// Calculate Total Price
        var totalPrice = _.sum(prices);

        return totalPrice;
    }
}