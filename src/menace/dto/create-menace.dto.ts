import { IsString, IsNotEmpty } from "class-validator"
export class CreateMenaceDto {

    @IsString()
    @IsNotEmpty()
    title: string

    @IsString()
    @IsNotEmpty()
    photo: string

    @IsString()
    @IsNotEmpty()
    dangerousness: string

    @IsString()
    @IsNotEmpty()
    category: string

    @IsString()
    @IsNotEmpty()
    risk: string

    @IsString()
    description: string

    
}