import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt'

@Injectable()
export class UserService {
    constructor(private readonly prisma: PrismaService) {}

    async create({ email, name, password, role }: CreateUserDto) {
        
        const saltOrRounds = 10
        const hash = await bcrypt.hash(password, saltOrRounds)
        
        return await this.prisma.user.create({
            data: {
                email: email,
                name: name,
                role: role,
                password: hash
            },
            select: {
                name: true,
                email: true,
                role: true,
                createdAt: true
            }
        })
    }

    async findOne(email: string) {
        return await this.prisma.user.findUnique({
            where: {
                email: email,
                deletedAt: null
            },
            select: {
                id: true,
                name: true,
                role: true,
                email: true,
                password: true
            }
        })
    }
    
}
