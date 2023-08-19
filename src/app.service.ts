import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(nameOfGuy): string {
    return `Hello World! ${nameOfGuy}`;
  }
}
