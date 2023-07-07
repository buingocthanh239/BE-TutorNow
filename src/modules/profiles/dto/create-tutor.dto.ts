import { Transform, Type } from 'class-transformer';
import {
    IsArray,
    IsMongoId,
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsPhoneNumber,
    IsString,
    IsUrl,
    Min,
} from 'class-validator';
import { Gender } from 'src/common/enum/base.enum';

export class CreateTutorDto {
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

    @Type(() => CreateTutorDetailDto)
    tutorDetail: CreateTutorDetailDto;
}

export class CreateTutorDetailDto {
    @IsString()
    @IsUrl()
    facebookUrl: string;

    @IsString()
    @IsNotEmpty()
    position: string;

    @IsString()
    @IsNotEmpty()
    agenc: string;

    @IsString()
    @IsNotEmpty()
    department: string;

    @IsString()
    @IsNotEmpty()
    transport: string;

    @IsString()
    @IsNotEmpty()
    introduction: string;

    @IsString()
    @IsNotEmpty()
    certificates: string[];

    @IsOptional()
    @IsArray()
    @Min(1)
    scheduleAvailable: string[];

    @IsOptional()
    @IsArray()
    @Min(1)
    @Type(() => CreateFeeDto)
    fees: CreateFeeDto[];
}

export class CreateFeeDto {
    @IsString()
    @IsNotEmpty()
    _class: string;

    @IsString()
    @IsNotEmpty()
    subject: string;

    @IsNumber()
    @Transform((v) => +v.value)
    salary: number;
}
