import { Controller, Post, Body, Param, Get, UseGuards, Patch } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { UpdatePatchUserDto } from './dto/update-patch-user.dto';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {}

    @UseGuards(AuthGuard)
    @Post()
    async create(@Body() {name, email, password}: CreateUserDto) {
        return this.userService.create({name, email, password})
    }

    @UseGuards(AuthGuard)
    @Get(':email')
    async findByEmail(@Param('email') email: string) {
        return this.userService.findOne(email)
    }
}
