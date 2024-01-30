import { ApiProperty } from "@nestjs/swagger";
import { IsString,IsNotEmpty, IsEmail} from 'class-validator';

export class LoginAuthDto {
    @ApiProperty()
    @IsEmail()
    @IsNotEmpty()
    readonly email : string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    readonly password : string;
}
