import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsPhoneNumber, IsString } from "class-validator";

export class CreateUserDTO {
    @IsNotEmpty()
    @IsString()
    name: String;

    @IsNotEmpty()
    @IsEmail()
    email: String;

    @IsPhoneNumber()
    phone: String;

    @IsNumber()
    age: Number
}