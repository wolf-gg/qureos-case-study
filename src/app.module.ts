import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ControllerModule } from './controller/controller.module';
import { RepositoryModule } from './repository/repository.module';

@Module({
  imports: [
    ControllerModule,
    RepositoryModule,
    MongooseModule.forRoot('mongodb://localhost:27017/qureos-case-study')
  ],
})
export class AppModule {}
