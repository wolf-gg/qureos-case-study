import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ServiceModule } from 'src/service/service.module';
import { BookController } from './book.controller';

@Module({
  imports: [ServiceModule, HttpModule],
  controllers: [BookController],
})
export class ControllerModule {}
