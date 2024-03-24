import { Injectable } from '@nestjs/common';
import IUserService from './interfaces/user.service';
import { ResponseDto } from '../dto/general.dto';
import { UserDto, CreateUserDto, UpdateUserDto } from '../dto/user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../model/user.model';

@Injectable()
export class UserService implements IUserService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}
  async getAll(): Promise<UserDto[]> {
    const users = await this.usersRepository.find();
    return users;
  }
  async getById(id: number): Promise<UserDto> {
    const user = await this.usersRepository.findOneBy({ id });
    return user;
  }
  async create(createUserDto: CreateUserDto): Promise<UserDto> {
    const user = this.usersRepository.save(createUserDto);
    return user;
  }
  update(id: number, pdateUserDto: UpdateUserDto): Promise<UserDto> {
    throw new Error('Method not implemented.');
  }
  delete(id: number): Promise<ResponseDto> {
    throw new Error('Method not implemented.');
  }
}
