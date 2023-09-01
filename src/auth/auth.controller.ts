import { Controller, Body, Post, HttpCode, HttpStatus, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthLoginDto } from './dto/auth-login.dto';
import { AuthRegisterDto } from './dto/auth-register.dto';
import { AuthForgetDto } from './dto/auth-forget.dto';
import { AuthResetDto } from './dto/auth-reset.dto';
import { UserService } from 'src/user/user.service';
import { AuthGuard } from '../guards/auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService, private userService: UserService) {}

    @HttpCode(HttpStatus.OK)
    @Post('login')
    async signIn(@Body() {email, password}: AuthLoginDto) {
        return this.authService.signIn(email, password)
    }

    @Post('register')
    async register(@Body() { email, name, password, role }: AuthRegisterDto) {
        return this.userService.create({ name, email, password, role })
    }

    // @Post('forget')
    // async forget(@Body() {email}: AuthForgetDto) {
    //     return this.authService.forget(email)
    // }

    @Post('reset')
    async reset(@Body() {password, token}: AuthResetDto) {
        return this.authService.reset(password, token)
    }

    @UseGuards(AuthGuard)
    @Post('/me')
    async me(@Body() { token }) {
        return this.authService.checkToken(token)
    }
}
