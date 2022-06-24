import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { Book, BookDocument } from 'src/schema/book.schema';

@Injectable()
export class BookRepository {
  constructor(
    @InjectModel(Book.name)
    private books: Model<BookDocument>
  ) {}

  async insertBook(books: Book[]) {
    this.books.insertMany(books);
  }

  async findMany(query: FilterQuery<BookDocument>) {
    return this.books.find(query);
  }
}
