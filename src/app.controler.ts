/** @format */

import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppControler {
  @Get()
  getRootRoute() {
    return 'Hello World';
  }
}
