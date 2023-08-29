import { IsEmail, IsEmpty } from "class-validator"

export class AuthForgetDto {

    @IsEmail()
    @IsEmpty()
    email:string
}