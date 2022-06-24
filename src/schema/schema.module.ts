import { Catch, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Book, BookSchema } from './book.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Book.name, schema: BookSchema
      }
    ])
  ],
  exports: [
    MongooseModule.forFeature([
      {
        name: Book.name, schema: BookSchema
      }
    ])
  ]
})
export class SchemaModule {}
