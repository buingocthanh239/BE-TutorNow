import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Account } from './account.schema';
import { Model } from 'mongoose';
import {  RegisterDto } from './dto';
import { bcryptHelper } from 'src/common/utils/bcrypt';

@Injectable()
export class AuthService {
    constructor(@InjectModel(Account.name) private readonly accountModel: Model<Account>) {}
    async createAccount(accountDto: RegisterDto): Promise<Account> {
        const findAccount = await this.accountModel.findOne({email: accountDto.email})
        if (findAccount) {
            throw new BadRequestException('email or username is exits')
        }
        accountDto.password = await bcryptHelper.hash(accountDto.password);
        const newAccount = await this.accountModel.create(accountDto);
       return newAccount;
    }
}
