import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { UserService } from '../service/user.service';
import { CreateUserDto, UpdateUserDto, UserDto } from '../dto/user.dto';
import { ResponseDto } from '../dto/general.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getAll(): Promise<UserDto[]> {
    return this.userService.getAll();
  }
  @Get('/:id')
  getById(@Param('id', ParseIntPipe) id: number): Promise<UserDto> {
    return this.userService.getById(id);
  }
  @Post()
  create(@Body() createUserDto: CreateUserDto): Promise<UserDto> {
    return this.userService.create(createUserDto);
  }
  @Patch('/:id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<UserDto> {
    return this.userService.update(id, updateUserDto);
  }
  @Delete()
  delete(@Param('id', ParseIntPipe) id: number): Promise<ResponseDto> {
    return this.userService.delete(id);
  }
}
