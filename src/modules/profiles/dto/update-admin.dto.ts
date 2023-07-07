import { Type } from 'class-transformer';
import { CreateAdminDetailDto } from './create-admin.dto';

export class UpdateAdminDto {
    @Type(() => CreateAdminDetailDto)
    adminDetail: CreateAdminDetailDto;
}
