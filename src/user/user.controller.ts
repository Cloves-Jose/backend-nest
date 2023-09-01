import { Controller, Post, Body, Param, Get, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthGuard } from 'src/guards/auth.guard';
import { Roles } from 'src/roles.decorator';
import { Role } from 'src/enums/role.enum';
import { RolesGuard } from 'src/guards/roles.guard';

@Controller('user')
@UseGuards(AuthGuard, RolesGuard)
export class UserController {

    constructor(private readonly userService: UserService) {}

    @Roles(Role.ADMIN)
    @Post()
    async create(@Body() {name, email, password, role}: CreateUserDto) {
        return this.userService.create({name, email, password, role})
    }

    @Roles(Role.ADMIN, Role.USER)
    @Get(':email')
    async findByEmail(@Param('email') email: string) {
        return this.userService.findOne(email)
    }
}
