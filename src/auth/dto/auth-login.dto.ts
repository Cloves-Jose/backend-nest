import { IsEmail, IsStrongPassword, IsEmpty } from "class-validator";
export class AuthLoginDto {

    @IsEmail()
    @IsEmpty()
    email: string;

    @IsEmpty()
    @IsStrongPassword({
        minLength: 8,
        minUppercase: 1,
        minLowercase: 1,
        minNumbers: 3,
        minSymbols: 3
    })
    password: string;
}