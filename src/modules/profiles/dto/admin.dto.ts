import { Expose, Type } from "class-transformer";
import { Role } from "src/common/enum/roles.enum";

export class AdminDto {
    @Expose() 
    id: string;

    @Expose() 
    @Type(() => AdminDetailDto)
    adminDetails: AdminDetailDto;
}

export class AdminDetailDto {
    @Expose() roles: Role[]
}