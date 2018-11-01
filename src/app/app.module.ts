import { HomeModule } from './home/home.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [HomeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
