import { Controller, Get, UseGuards } from '@nestjs/common';
import { RegisterMenaceService } from './register_menace.service';
import { AuthGuard } from 'src/guards/auth.guard';
import { SkipThrottle } from '@nestjs/throttler';

@Controller('register-menace')
export class RegisterMenaceController {

    constructor(private readonly register_menace: RegisterMenaceService) {}

    @SkipThrottle()
    @UseGuards(AuthGuard)
    @Get()
    async getGeolocation() {
        return this.register_menace.getGeolocation()
    }

    
}
