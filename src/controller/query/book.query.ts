import { Type } from 'class-transformer';
import { IsDateString, IsInt, IsOptional, IsString } from 'class-validator';

export class BookQuery {
  @IsString()
  @IsOptional()
  @Type(() => String)
  title: string;

  @IsString()
  @IsOptional()
  @Type(() => String)
  isbn: string;
  
  @IsDateString()
  @IsOptional()
  @Type(() => String)
  date: String;

  @IsInt()
  @IsOptional()
  @Type(() => Number)
  price: number;

  @IsString()
  @IsOptional()
  @Type(() => String)
  currency: string;

  @IsString()
  @IsOptional()
  @Type(() => String)
  status: string;

  @IsString()
  @IsOptional()
  @Type(() => String)
  author: string;

  @IsString()
  @IsOptional()
  @Type(() => String)
  category: string;
}
