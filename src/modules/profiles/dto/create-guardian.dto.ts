import {
    IsMongoId,
    IsNotEmpty,
    IsOptional,
    IsPhoneNumber,
    IsString,
} from 'class-validator';
import { Gender } from 'src/common/enum/base.enum';

export class CreateGuardianDto {
    @IsMongoId()
    accountId: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    name?: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    gender?: Gender;

    @IsPhoneNumber()
    phone: string;
}
