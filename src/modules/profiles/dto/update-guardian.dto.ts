import {
    IsNotEmpty,
    IsOptional,
    IsPhoneNumber,
    IsString,
} from 'class-validator';
import { Gender } from 'src/common/enum/base.enum';

export class UpdateGuardianDto {
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    name?: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    gender?: Gender;

    @IsOptional()
    @IsPhoneNumber()
    phone: string;
}
