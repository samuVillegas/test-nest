import { IsBoolean, IsString, MaxLength } from 'class-validator';

export class UserDto {
  id: number;
  firstName: string;
  lastName: string;
  isActive: boolean;
}
export class CreateUserDto {
  @IsString()
  @MaxLength(100)
  firstName: string;
  @IsString()
  @MaxLength(100)
  lastName: string;
}
export class UpdateUserDto {
  @IsString()
  @MaxLength(100)
  firstName: string;
  @IsString()
  @MaxLength(100)
  lastName: string;
  @IsBoolean()
  isActive: boolean;
}
