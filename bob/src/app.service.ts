import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(age?: number): number {
    return age > 18 ? 18 : 0;
  }
}
