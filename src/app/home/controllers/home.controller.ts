import { AppService } from '../../shared/services/app.service';
import { Controller, Get } from '@nestjs/common';

@Controller('home')
export class HomeController {
  constructor(private readonly appService: AppService) {}

  @Get()
  root(): string {
    return this.appService.root();
  }
}
