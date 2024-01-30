import { IsString,IsNotEmpty, IsEmail,} from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {

    @ApiProperty() 
    @IsNotEmpty()
    @IsString()
    readonly name: string;

    @ApiProperty() 
    @IsNotEmpty()
    @IsEmail()
    readonly email: string;

    @ApiProperty() 
    @IsNotEmpty()
    @IsString()
    readonly password: string;
}
