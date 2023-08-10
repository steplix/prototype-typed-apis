import { ApiProperty } from '@nestjs/swagger';

export class GreetingRequestDto {
  @ApiProperty({
    example: 2,
    description: 'Age of greeting',
    required: false,
  })
  age?: number;
}

export class ResponseGreetingRequestDto {
  @ApiProperty({ example: 18, description: 'Greeting response' })
  greeting: number;
}
