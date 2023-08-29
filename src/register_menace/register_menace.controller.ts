import { Controller, Get, UseGuards } from '@nestjs/common';
import { RegisterMenaceService } from './register_menace.service';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('register-menace')
export class RegisterMenaceController {

    constructor(private readonly register_menace: RegisterMenaceService) {}

    @UseGuards(AuthGuard)
    @Get()
    async getGeolocation() {
        return this.register_menace.getGeolocation()
    }

    
}
