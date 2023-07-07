import { Expose, Type } from 'class-transformer';
import { BaseDto } from 'src/common/dto';
import { Gender } from 'src/common/enum/base.enum';
import { Role } from 'src/common/enum/roles.enum';

export class ProfileDto extends BaseDto {
    @Expose()
    @Type(() => AccountDto)
    accountId: AccountDto;

    @Expose()
    name?: string;

    @Expose()
    gender?: Gender;

    @Expose()
    phone?: string;

    @Expose()
    dob?: Date;

    @Expose()
    @Type(() => TutorDetailDto)
    tutorDetail?: TutorDetailDto;

    @Expose()
    @Type(() => AdminDetailDto)
    adminDetail?: AdminDetailDto;
}

export class AdminDetailDto {
    @Expose() roles: Role[];
}

export class TutorDetailDto {
    @Expose()
    facebookUrl: string;

    @Expose()
    position: string;

    @Expose()
    agenc: string;

    @Expose()
    department: string;

    @Expose()
    transport: string;

    @Expose()
    introduction: string;

    @Expose()
    certificates: string[];

    @Expose()
    scheduleAvailable: string[];

    @Expose()
    rate: number;

    @Expose()
    @Type(() => FeeDto)
    fees?: FeeDto[];
}

class FeeDto {
    @Expose() _class: string;
    @Expose() subject: string;
    @Expose() fee: number;
}

class AccountDto {
    @Expose() email: string;
    @Expose() username: string;
    @Expose() avatar: string;
    @Expose() type: string;
}
