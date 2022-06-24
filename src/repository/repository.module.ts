import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { SchemaModule } from 'src/schema/schema.module';
import { BookRepository } from "./book.repository";

@Module({
  imports: [SchemaModule],
  providers: [BookRepository],
  exports: [BookRepository]
})
export class RepositoryModule {}