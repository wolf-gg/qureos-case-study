import { Module } from '@nestjs/common';
import { ServiceModule } from 'src/service/service.module';
import { AppController } from './app.controller';

@Module({
  imports: [ServiceModule],
  controllers: [AppController],
})
export class ControllerModule {}
