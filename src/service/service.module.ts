import { Module } from '@nestjs/common';
import { RepositoryModule } from 'src/repository/repository.module';
import { BookService } from './book.service';

@Module({
  imports: [RepositoryModule],
  providers: [BookService],
  exports: [BookService]
})
export class ServiceModule {}
