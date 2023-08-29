import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMenaceDto } from './dto/create-menace.dto';
import { UpdateMenaceDto } from './dto/update-menace.dto';

@Injectable()
export class MenaceService {

    private date = new Date

    constructor(private readonly prisma: PrismaService) {}

    async getMenace() {
        return await this.prisma.menace.findMany({
            where: {
                deletedAt: null
            },
            select: {
                id: true,
                title: true,
                photo: true,
                dangerousness: true,
                category: true,
                risk: true,
                description: true,
                createdAt: true,
                updatedAt: true
            }
        })
    }

    async createMenace({ title, photo, dangerousness, category, risk, description }: CreateMenaceDto) {
        return await this.prisma.menace.create({
            data: {
                title,
                photo,
                dangerousness,
                category,
                risk,
                description
            },
            select: {
                id: true,
                title: true,
                photo: true,
                dangerousness: true,
                category: true,
                risk: true,
                description: true
            }
        })
    }

    async getMenaceById(id: string) {
        return await this.prisma.menace.findUnique({
            where: {
                id: id,
                deletedAt: null
            },
            select: {
                id: true,
                title: true,
                photo: true,
                dangerousness: true,
                category: true,
                risk: true,
                description: true
            }
        })
    }

    async updateMenace({ title, photo, dangerousness, category, risk, description }: UpdateMenaceDto, id: string) {
        return await this.prisma.menace.update({
            where: { id },
            data: {
                title,
                photo,
                dangerousness,
                category,
                risk,
                description
            },
            select: {
                id: true,
                title: true,
                photo: true,
                dangerousness: true,
                category: true,
                risk: true,
                description: true
            }
        })
    }

    async deleteMenace(id: string) {

        return await this.prisma.menace.update({
            where: { id },
            data: {
                deletedAt: this.date.toISOString()
            },
            select: {
                id: true,
                title: true
            }
        })
    }
}
