import { IsArray, IsEnum, IsMongoId } from 'class-validator';
import { Role } from 'src/common/enum/roles.enum';
import { Type } from 'class-transformer';

export class CreateAdminDto {
    @IsMongoId()
    accountId: string;

    @Type(() => CreateAdminDetailDto)
    adminDetail: CreateAdminDetailDto;
}

export class CreateAdminDetailDto {
    @IsArray()
    @IsEnum(Role)
    roles: Role[];
}
