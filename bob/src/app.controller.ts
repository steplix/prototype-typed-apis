import { Body, Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { GreetingRequestDto, ResponseGreetingRequestDto } from './app.dto';

@Controller()
@ApiTags('bob')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOkResponse({
    description: 'Hello World!',
    type: ResponseGreetingRequestDto,
  })
  getHello(@Body() body: GreetingRequestDto): number {
    return this.appService.getHello(body.age);
  }
}
