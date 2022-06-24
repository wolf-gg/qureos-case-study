import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { PublishInfo } from 'src/constant/publish-info.constant';

export type BookDocument = Book & Document;

@Schema()
export class Book {
  @Prop()
  title: string;

  @Prop()
  isbn: string;

  @Prop()
  pageCount: number;

  @Prop(PublishInfo)
  published: PublishInfo;

  @Prop()
  thumbnailUrl: string;

  @Prop()
  shortDescription: string;

  @Prop()
  longDescription: string;

  @Prop()
  status: string;

  @Prop([String])
  authors: string[];

  @Prop([String])
  categories: string[];
}

export const BookSchema = SchemaFactory.createForClass(Book);
