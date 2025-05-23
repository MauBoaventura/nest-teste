// src/students/students.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';
import { Student } from './student.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Student])], // Registra a entidade Student
  controllers: [StudentsController],
  providers: [StudentsService],
})
export class StudentsModule {}
