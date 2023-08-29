import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt'
import { UpdatePatchUserDto } from './dto/update-patch-user.dto';

@Injectable()
export class UserService {
    constructor(private readonly prisma: PrismaService) {}

    async create({ email, name, password }: CreateUserDto) {
        
        const saltOrRounds = 10
        const hash = await bcrypt.hash(password, saltOrRounds)
        
        return await this.prisma.user.create({
            data: {
                email: email,
                name: name,
                password: hash
            },
            select: {
                name: true,
                email: true,
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
                email: true,
                password: true
            }
        })
    }
    
}
