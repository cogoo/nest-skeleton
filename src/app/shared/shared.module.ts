import { AppService } from './services/app.service';
import { Module } from '@nestjs/common';

@Module({
  providers: [AppService],
  exports: [AppService],
})
export class SharedModule {}
