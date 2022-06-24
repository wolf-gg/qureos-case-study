import { Module } from '@nestjs/common';
import { RepositoryModule } from 'src/repository/repository.module';
import { AppService } from './app.service';

@Module({
  imports: [RepositoryModule],
  providers: [AppService],
  exports: [AppService]
})
export class ServiceModule {}
