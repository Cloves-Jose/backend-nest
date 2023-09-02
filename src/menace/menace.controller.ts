import { Controller, Get, UseGuards, Body, Post, Param, Delete, Put } from '@nestjs/common';
import { MenaceService } from './menace.service';
import { AuthGuard } from 'src/guards/auth.guard';
import { CreateMenaceDto } from './dto/create-menace.dto';
import { UpdateMenaceDto } from './dto/update-menace.dto';
import { RolesGuard } from 'src/guards/roles.guard';
import { Roles } from 'src/roles.decorator';
import { Role } from 'src/enums/role.enum';
import { SkipThrottle } from '@nestjs/throttler';

@Controller('menace')
@UseGuards(AuthGuard, RolesGuard)
export class MenaceController {

    constructor(private readonly menaceService: MenaceService) {}

    @Roles(Role.ADMIN, Role.USER)
    @Post()
    async create(@Body() { title, photo, dangerousness, category, risk, description }: CreateMenaceDto) {
        return this.menaceService.createMenace({title, photo, dangerousness, category, risk, description})
    }

    @Roles(Role.ADMIN, Role.USER)
    @SkipThrottle()
    @Get()
    async getMenace() {
        return this.menaceService.getMenace()
    }

    @Roles(Role.ADMIN, Role.USER)
    @Get(':id')
    async getMenaceById(@Param('id') id: string) {
        return this.menaceService.getMenaceById(id)
    }

    @Roles(Role.ADMIN, Role.USER)
    @Put(':id')
    async updateMenace(@Body() { title, photo, dangerousness, category, risk, description }: UpdateMenaceDto, @Param('id') id: string) {
        return this.menaceService.updateMenace({ title, photo, dangerousness, category, risk, description }, id)
    }

    @Roles(Role.ADMIN)
    @Delete(':id')
    async deleteMenace(@Param('id') id: string) {
        return this.menaceService.deleteMenace(id)
    }
}
