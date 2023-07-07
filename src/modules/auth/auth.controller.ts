import { Body, Controller, Post, Req, UseGuards, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AccountDto, LoginDto, RegisterDto } from './dto';
import { transformObjectToResponse } from 'src/common/utils/request';
import { ISuccessResponse } from 'src/common/interfaces';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('/register')
    async register(
        @Body() accountDto: RegisterDto,
    ): Promise<ISuccessResponse<AccountDto>> {
        const newAccount = await this.authService.createAccount(accountDto);
        return transformObjectToResponse(AccountDto)(newAccount);
    }

    @Post('login')
    async login(@Body() loginDto: LoginDto): Promise<any> {
        const token = await this.authService.login(loginDto);
        return token;
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    async getUserToken(@Req() req: any): Promise<any> {
        return {
            id: req.user.userId,
            email: req.user.email,
        };
    }
}
