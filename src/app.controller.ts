import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':name')
  getHello(@Param('name') nameOfGuy: string): string {
    return this.appService.getHello(nameOfGuy);
  }

  @Get()
  getHelloMain() {
    return 'hello world';
  }
}
