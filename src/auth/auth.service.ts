import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt'
// import { PrismaService } from 'src/prisma/prisma.service';
// import { CreateUserDto } from 'src/user/dto/create-user.dto';

@Injectable()
export class AuthService {
    constructor(
        // private prismaService: PrismaService,
        private userService: UserService,
        private jwtService: JwtService
        ) {}

    async signIn(email: string, password: string): Promise<any> {
        const user = await this.userService.findOne(email)

        const isMatch = await bcrypt.compare(password, user.password)

        if (isMatch == false) {
            throw new UnauthorizedException('E-mail e/ou senha incorretos.')
        }

        const payload = { sub: user.id, useremail: user.email }
        return {
            access_token: await this.jwtService.signAsync(payload)
        }
    }

    // async forget(email: string) {
    //     const user = await this.userService.findOne(email)

    //     if (!user) {
    //         throw new UnauthorizedException('E-mail está incorreto.')
    //     }

    //     // To do; Enviar o e-mail...
    //     return true
    // }

    // async reset(password: string, token: string) {
    //     // To do: validar o token...

    //     const id = 'id'
        
    //     await this.prismaService.user.update({
    //         where: {
    //             id
    //         },
    //         data: {
    //             password
    //         }
    //     })

    //     return true
        
    // }

}
