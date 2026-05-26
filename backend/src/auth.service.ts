import { Injectable, UnauthorizedException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async register(body: any) {
    const userExists = await this.userRepository.findOne({ where: { email: body.email } });
    if (userExists) throw new BadRequestException('E-mail já cadastrado!');

    const hashedPassword = await bcrypt.hash(body.password, 10);
    const newUser = this.userRepository.create({
      name: body.name,
      email: body.email,
      password: hashedPassword,
    });

    await this.userRepository.save(newUser);
    return { message: 'Conta criada com sucesso!' };
  }

  async login(body: any) {
    const user = await this.userRepository.findOne({ where: { email: body.email } });
    if (!user) throw new UnauthorizedException('Acesso negado');

    const isPasswordValid = await bcrypt.compare(body.password, user.password);
    if (!isPasswordValid) throw new UnauthorizedException('Acesso negado');

    // Se der certo, retorna o nome do usuário
    return { name: user.name };
  }
}