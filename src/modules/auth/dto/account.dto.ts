import { Exclude, Expose } from 'class-transformer';
import { BaseDto } from 'src/common/dto';

export class AccountDto extends BaseDto {
    @Expose() email: string;
    @Expose() username: string;
    @Expose() avatar: string;
    @Expose() type: string;
    @Expose() isValidEmail: boolean;
    @Exclude() password: string;
}
