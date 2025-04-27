// src/auth/dto/login.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ example: 'johndoe', description: 'O nome de usuário do usuário' })
  username: string;

  @ApiProperty({ example: 'secret123', description: 'A senha do usuário' })
  password: string;
}
