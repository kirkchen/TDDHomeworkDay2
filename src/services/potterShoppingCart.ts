import { Book } from '../models/book';
import * as _ from 'lodash';

export default class PotterShoppingCart {
    Calculate(books: Book[]): number {
        var totalPrice = _.sumBy(books, (book) => book.Count * 100);

        var bookCount = _.sumBy(books, 'Count');
        if (bookCount >= 2) {
            totalPrice = totalPrice * 0.95;
        }

        return totalPrice;
    }
}