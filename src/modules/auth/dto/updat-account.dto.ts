import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, IsStrongPassword, IsUrl } from "class-validator";
import { UserTypes } from "src/common/enum/base.enum";

export class UpdateAccountDto {
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    username?: string;

    @IsOptional()
    @IsString()
    @IsUrl()
    avatar?: string;

    @IsOptional()
    @IsString()
    @IsStrongPassword()
    password?: string;

}