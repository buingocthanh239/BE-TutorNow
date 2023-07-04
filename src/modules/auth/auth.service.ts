import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Account } from './account.schema';
import { Model } from 'mongoose';
import {  LoginDto, RegisterDto } from './dto';
import { bcryptHelper } from 'src/common/utils/bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(Account.name) private readonly accountModel: Model<Account>,
        private readonly jwtService: JwtService
    ) {}
    async createAccount(accountDto: RegisterDto): Promise<Account> {
        const findAccount = await this.accountModel.findOne({email: accountDto.email})
        if (findAccount) {
            throw new BadRequestException('email or username is exits')
        }
        accountDto.password = await bcryptHelper.hash(accountDto.password);
        const newAccount = await this.accountModel.create(accountDto);
       return newAccount;
    }

    async login(loginDto: LoginDto): Promise<any> {
        const user = await this.validateUser(loginDto);
        return {
            acccess_token: await this.jwtService.signAsync({
                username: user.username,
                sub: user.id,
                email: user.email,
                type: user.type,
                avatar: user.avatar,
            })
        }
    }

    async validateUser(loginDto: LoginDto): Promise<Account> {
        const findAccount = await this.accountModel.findOne({ 
            email: loginDto.email, 
            type: loginDto.type
        })
        if(!findAccount) {
            throw new NotFoundException('email is not valid')
        }
        const isPassword = bcryptHelper.comparePassword(loginDto.password, findAccount.password)
        if (!isPassword) {
            throw new BadRequestException('password is wrong')
        }
        return findAccount
    }
}
