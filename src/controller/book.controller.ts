import { HttpService } from '@nestjs/axios';
import { Controller, Get, Query } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { BookService } from '../service/book.service';
import { BookQuery } from './query/book.query';

@Controller('/book')
export class BookController {
  constructor(
    private httpService: HttpService,
    private readonly bookService: BookService
  ) {}

  @Get('/insert')
  async insertBooks() {
    const response = await lastValueFrom(
      this.httpService.get('https://run.mocky.io/v3/d7f02fdc-5591-4080-a163-95a08ce6895e')
    );

    const bookData = response.data;

    return this.bookService.insert(bookData);
  }

  @Get('/search')
  async searchBooks(
    @Query() params: BookQuery
  ) {
    return this.bookService.search(params);
  }
}
