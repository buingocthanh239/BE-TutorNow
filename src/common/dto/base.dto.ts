import { Expose } from 'class-transformer';
import { IsDate, IsOptional, IsString } from 'class-validator';

export class BaseDto {
    @Expose()
    id: string;

    @Expose()
    @IsString()
    @IsOptional()
    createdBy?: string;

    @Expose()
    @IsOptional()
    @IsString()
    updatedBy?: string;

    @Expose()
    @IsString()
    @IsOptional()
    deletedBy?: string;

    @Expose()
    @IsDate()
    createdAt: Date;

    @Expose()
    @IsDate()
    updatedAt: Date;

    @Expose()
    @IsDate()
    @IsOptional()
    deletedAt?: Date;
}

export class CreatedByDto {
    createdBy: string;
}

export class UpdatedByDto {
    updatedBy: string;
}

export class DeletedByDto {
    deletedBy: string;
}
