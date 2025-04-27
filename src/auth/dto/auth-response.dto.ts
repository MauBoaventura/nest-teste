// src/auth/dto/auth-response.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class AuthResponseDto {
  @ApiProperty({ example: 'eyJhbGciOiJIUzI1NiIsInR...', description: 'O token JWT gerado após login bem-sucedido' })
  access_token: string;
}
