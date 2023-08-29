import { IsJWT, IsString, IsStrongPassword } from "class-validator";

export class AuthResetDto {

    @IsString()
    @IsStrongPassword({
        minLength: 8,
        minUppercase: 1,
        minLowercase: 1,
        minNumbers: 3,
        minSymbols: 3
    })
    password: string

    @IsJWT()
    token:string
}