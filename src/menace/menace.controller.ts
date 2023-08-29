import { Controller, Get, UseGuards, Body, Post, Param, Delete, Put } from '@nestjs/common';
import { MenaceService } from './menace.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { CreateMenaceDto } from './dto/create-menace.dto';
import { UpdateMenaceDto } from './dto/update-menace.dto';

@Controller('menace')
export class MenaceController {

    constructor(private readonly menaceService: MenaceService) {}

    @UseGuards(AuthGuard)
    @Post()
    async create(@Body() { title, photo, dangerousness, category, risk, description }: CreateMenaceDto) {
        return this.menaceService.createMenace({title, photo, dangerousness, category, risk, description})
    }

    @UseGuards(AuthGuard)
    @Get()
    async getMenace() {
        return this.menaceService.getMenace()
    }

    @UseGuards(AuthGuard)
    @Get(':id')
    async getMenaceById(@Param('id') id: string) {
        return this.menaceService.getMenaceById(id)
    }

    @UseGuards(AuthGuard)
    @Put(':id')
    async updateMenace(@Body() { title, photo, dangerousness, category, risk, description }: UpdateMenaceDto, @Param('id') id: string) {
        return this.menaceService.updateMenace({ title, photo, dangerousness, category, risk, description }, id)
    }

    @UseGuards(AuthGuard)
    @Delete(':id')
    async deleteMenace(@Param('id') id: string) {
        return this.menaceService.deleteMenace(id)
    }
}
