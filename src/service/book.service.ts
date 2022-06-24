import { Injectable } from '@nestjs/common';
import { FilterQuery } from 'mongoose';
import { BookQuery } from 'src/controller/query/book.query';
import { BookRepository } from 'src/repository/book.repository';
import { Book, BookDocument } from 'src/schema/book.schema';

@Injectable()
export class BookService {
  constructor(
    private bookRepository: BookRepository
  ) {}

  async insert(books: Book[]) {
    return this.bookRepository.insertBook(books); 
  }

  async search(params: BookQuery) {
    let query = {} as FilterQuery<BookDocument>;

    const addToQuery = (key, value) => ({
      [key]: value,
      ...query
    })

    if (params.title) {
      query = addToQuery('title', params.title);
    }

    if (params.isbn) {
      query = addToQuery('isbn', params.isbn);
    }
    
    if (params.date) {
      query = addToQuery('published.$date', { $regex: new RegExp(`^${params.date}`) });
    }

    if (params.price) {
      query = addToQuery('published.price', params.price);
    }

    if (params.currency) {
      query = addToQuery('published.currency', params.currency);
    }

    if (params.status) {
      query = addToQuery('status', params.status);
    }

    if (params.author) {
      query = addToQuery('authors', { $in: [params.author] });
    }

    if (params.category) {
      query = addToQuery('categories', { $in: [params.category] });
    }

    return this.bookRepository.findMany(query);
  }
}
