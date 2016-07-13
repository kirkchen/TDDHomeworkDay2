import { Book } from '../models/book';

export default class PotterShoppingCart {
    Calculate(books: Book[]): number {
        var totalPrice = 0;
       for (var book of books) {
           totalPrice += book.Count * 100;
       }

        return totalPrice;
    }
}