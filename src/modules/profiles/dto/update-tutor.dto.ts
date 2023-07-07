import { Type } from 'class-transformer';
import {
    IsArray,
    IsNotEmpty,
    IsOptional,
    IsPhoneNumber,
    IsString,
    IsUrl,
    Min,
} from 'class-validator';
import { Gender } from 'src/common/enum/base.enum';
import { CreateFeeDto } from './create-tutor.dto';

export class UpdateTutorDto {
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

    @IsOptional()
    @Type(() => UpdateTutorDetailDto)
    tutorDetail: UpdateTutorDetailDto;
}

export class UpdateTutorDetailDto {
    @IsOptional()
    @IsString()
    @IsUrl()
    facebookUrl: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    position: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    agenc: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    department: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    transport: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    introduction: string;

    @IsOptional()
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
