import { Injectable } from '@nestjs/common';
import { BookRepository } from 'src/repository/book.repository';

@Injectable()
export class AppService {
  constructor(
    private bookRepository: BookRepository
  ) {}

  testInsert() {
    return this.bookRepository.insertBook();
  }
}
