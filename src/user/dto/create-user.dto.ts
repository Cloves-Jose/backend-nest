import { IsEmail, IsString, IsStrongPassword, IsNotEmpty, IsOptional, IsEnum } from "class-validator"
import { Role } from "src/enums/role.enum"

export class CreateUserDto {

    @IsString()
    @IsNotEmpty()
    name: string

    @IsEmail()
    @IsNotEmpty()
    email: string

    @IsOptional()
    @IsEnum(Role)
    role: Role

    @IsStrongPassword({
        minLength: 8,
        minUppercase: 1,
        minLowercase: 1,
        minNumbers: 3,
        minSymbols: 3
    })
    password: string
}