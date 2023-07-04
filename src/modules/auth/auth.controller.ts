import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AccountDto, LoginDto, RegisterDto } from './dto';
import { transformObjectToResponse } from 'src/common/utils/request';
import { ISuccessResponse } from 'src/common/interfaces';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('/register')
    async register(@Body() accountDto: RegisterDto): Promise<ISuccessResponse<AccountDto>> {
        const newAccount = await this.authService.createAccount(accountDto)
        return transformObjectToResponse(AccountDto)(newAccount)
    }

    @Post('login')
    async login(@Body() loginDto: LoginDto): Promise<any> {
        const token = await this.authService.login(loginDto)
        return token
    }
}
