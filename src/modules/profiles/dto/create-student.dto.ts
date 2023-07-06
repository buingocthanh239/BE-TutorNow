import { IsEnum, IsISO8601, IsMongoId, IsNotEmpty, IsOptional, IsPhoneNumber, IsString } from "class-validator";
import { Gender } from "src/common/enum/base.enum";

export class CreateStudentDto {
    @IsMongoId()
    accountId: string;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsEnum(Gender)
    gender: Gender

    @IsString()
    @IsPhoneNumber('VN')
    phone: string;

    @IsOptional()
    @IsISO8601()
    dob?: Date;
}