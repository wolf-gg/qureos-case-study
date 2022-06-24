import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book, BookDocument } from 'src/schema/book.schema';

@Injectable()
export class BookRepository {
  constructor(
    @InjectModel(Book.name)
    private books: Model<BookDocument>
  ) {}

  async insertBook() {
    this.books.insertMany({
      title: 'test'
    });
  }
}
