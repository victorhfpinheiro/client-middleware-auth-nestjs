import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('uuid')
  getUUID(): string {
    return this.appService.getHello();
  }

  @Get('accountid')
  getAccountId(): string {
    return this.appService.getHello();
  }

  @Get('billing-profile')
  getBillingProfile(): string {
    return this.appService.getHello();
  }

  @Get('nrdocument')
  getNrDocument(): string {
    return this.appService.getHello();
  }
}
