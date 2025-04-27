import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { StudentsService } from './students.service';
import { Student } from './student.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ApiBearerAuth, ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Estudantes') // Define a tag para agrupar rotas de autenticação no Swagger
@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @UseGuards(JwtAuthGuard) // Aplica a proteção com JWT nesta rota
  @ApiBearerAuth() // Indica que a rota usa autenticação via Bearer Token
  @ApiOperation({ summary: 'Lista todos os alunos (protegido)' })
  @ApiResponse({ status: 200, description: 'Alunos listados com sucesso' })
  @ApiResponse({ status: 401, description: 'Token JWT inválido ou ausente' })
  @Get()
  findAll(): Promise<Student[]> {
    return this.studentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Student> {
    return this.studentsService.findOne(id);
  }

  @Post()
  create(@Body() student: Student): Promise<Student> {
    return this.studentsService.create(student);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() student: Student): Promise<void> {
    return this.studentsService.update(id, student);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.studentsService.remove(id);
  }
}
