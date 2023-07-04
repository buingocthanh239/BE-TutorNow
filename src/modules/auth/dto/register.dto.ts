import { IsEmail, IsEnum, IsNotEmpty, IsString, IsStrongPassword } from "class-validator";
import { UserTypes } from "src/common/enum/base.enum";

export class RegisterDto {
    @IsString()
    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    username: string;

    @IsString()
    @IsStrongPassword()
    password: string;

    @IsString()
    @IsEnum(UserTypes)
    type: UserTypes
}