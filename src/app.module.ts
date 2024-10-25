import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentsModule } from './students/students.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { AlunoModule } from './aluno/aluno.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'srv755.hstgr.io',
      port: 3306,
      username: 'u976231404_atlas', // Seu usuário do MySQL
      password: 'L@g1;vbw7IGY', // Sua senha do MySQL
      database: 'u976231404_atlas',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // True apenas para desenvolvimento
    }),
    StudentsModule,
    AuthModule,
    UserModule,
    AlunoModule,
  ],
})
export class AppModule {}
