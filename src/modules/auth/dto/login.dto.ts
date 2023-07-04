import { IsEmail, IsEnum, IsString, IsStrongPassword } from 'class-validator';
import { UserTypes } from 'src/common/enum/base.enum';

export class LoginDto {
    @IsString()
    @IsEmail()
    email: string;

    @IsString()
    @IsStrongPassword()
    password: string;

    @IsString()
    @IsEnum(UserTypes)
    type: UserTypes;
}
