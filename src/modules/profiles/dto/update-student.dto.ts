import {
    IsEnum,
    IsISO8601,
    IsMongoId,
    IsNotEmpty,
    IsOptional,
    IsPhoneNumber,
    IsString,
} from 'class-validator';
import { Gender } from 'src/common/enum/base.enum';

export class UpdateStudentDto {
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsOptional()
    @IsString()
    @IsEnum(Gender)
    readonly gender: Gender;

    @IsOptional()
    @IsString()
    @IsPhoneNumber('VN')
    readonly phone: string;

    @IsOptional()
    @IsOptional()
    @IsISO8601()
    readonly dob?: Date;
}
