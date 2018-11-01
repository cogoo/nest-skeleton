import { SharedModule } from './../shared/shared.module';
import { HomeController } from './controllers/home.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [SharedModule],
  controllers: [HomeController],
  providers: [],
})
export class HomeModule {}
