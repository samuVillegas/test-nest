import { ResponseDto } from 'src/user/dto/general.dto';
import { CreateUserDto, UpdateUserDto, UserDto } from 'src/user/dto/user.dto';

export default interface IUserService {
  getAll(): Promise<UserDto[]>;
  getById(id: number): Promise<UserDto>;
  create(createUserDto: CreateUserDto): Promise<UserDto>;
  update(id: number, pdateUserDto: UpdateUserDto): Promise<UserDto>;
  delete(id: number): Promise<ResponseDto>;
}
