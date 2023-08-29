import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RegisterMenaceService {
    constructor(private readonly prisma: PrismaService) {}

    async getGeolocation() {
        return await this.prisma.register_menace.findMany({
            where: {
                deletedAt: null
            },
            select: {
                id: true,
                latitude: true,
                longitude: true,
                createdAt: true,
                updatedAt: true,
                deletedAt: true,
                title_menace: true,
                menaceId: true,
                description: true,
                location: true
            }
        })
    }

}
