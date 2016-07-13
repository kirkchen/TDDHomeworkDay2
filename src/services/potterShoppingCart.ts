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
        var totalPrice = _.sumBy(books, (book) => book.Count * 100);

        var bookCount = _.sumBy(books, 'Count');
        var discountRule = _.find(this.DiscountRule, ['Count', bookCount]);
        if(discountRule){
            totalPrice *= discountRule.DiscountRate;
        }

        return totalPrice;
    }
}