// src/auth/auth.controller.ts
import { Controller, Post, Body, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthResponseDto } from './dto/auth-response.dto';
import { LoginDto } from './dto/login.dto';

@ApiTags('auth') // Define a tag para agrupar rotas de autenticação no Swagger
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiOperation({ summary: 'Login do usuário' }) // Resumo da operação
  @ApiResponse({ status: 201, description: 'Login bem-sucedido', type: AuthResponseDto }) // Define a resposta de sucesso
  @ApiResponse({ status: 401, description: 'Credenciais inválidas' }) // Define outras respostas
  async login(@Body() loginDto: LoginDto): Promise<AuthResponseDto> {
    return this.authService.login(loginDto);
  }
}
