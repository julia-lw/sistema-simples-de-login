import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity'; // 👈 Corrigido o caminho do import
import { AuthService } from './auth.service'; // 👈 Adicionado o import do Service
import { AuthController } from './auth.controller'; // 👈 Adicionado o import do Controller

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'better-sqlite3', // Mantive o driver que você escolheu 🚀
      database: 'database.sqlite', 
      entities: [User],
      synchronize: true, 
    }),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [AuthController], // 👈 O AuthController PRECISA estar aqui dentro!
  providers: [AuthService], // 👈 O AuthService PRECISA estar aqui dentro!
})
export class AppModule {}