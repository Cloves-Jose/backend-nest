import { IsEmail, IsString, IsStrongPassword, IsNotEmpty } from "class-validator"

export class CreateUserDto {

    @IsString()
    @IsNotEmpty()
    name: string

    @IsEmail()
    @IsNotEmpty()
    email: string

    @IsStrongPassword({
        minLength: 8,
        minUppercase: 1,
        minLowercase: 1,
        minNumbers: 3,
        minSymbols: 3
    })
    password: string
}