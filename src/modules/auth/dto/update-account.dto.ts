import {
    IsEmail,
    IsEnum,
    IsNotEmpty,
    IsOptional,
    IsString,
    IsStrongPassword,
    IsUrl,
} from 'class-validator';

export class UpdateAccountDto {
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    username?: string;

    @IsOptional()
    @IsString()
    @IsUrl()
    avatar?: string;
}
