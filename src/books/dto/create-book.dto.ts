import { ApiProperty } from "@nestjs/swagger";
import { IsString,IsNotEmpty, IsOptional,IsNumber,IsArray} from 'class-validator';

export class CreateBookDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    readonly title : string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    readonly genre : string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    readonly description : string;

    @ApiProperty()
    @IsNumber()
    @IsOptional()
    readonly pages : number;

    @ApiProperty()
    @IsArray()
    @IsNotEmpty()
    readonly keywords : string[];
}
