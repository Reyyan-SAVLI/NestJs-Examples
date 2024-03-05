import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsDateString, IsEmail, IsNotEmpty, IsString } from "class-validator";
import { IsAdult } from "./user.validation";


export class CreateUserDto{
    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        example: 'Reyyan Şavlı'
    })
    name: string;

    @IsEmail()
    @ApiProperty({
        example: 'reyyan@gmail.com'
    })
    email: string;

    @IsAdult({message: 'Kayıt için 18 yaşından büyük olmalı.'})
    @IsDateString()
    @ApiProperty({
        example: '2002-03-29',
    })
    birthday: Date;
}