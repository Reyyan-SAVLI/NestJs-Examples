import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";


export class ProductCreateDto{

    @IsString()
    @ApiProperty({
        example: 'Product Name'
    })
    name: string;

    @IsString()
    @ApiProperty({
        example: 'User Id'
    })
    userId: string;

    @IsString()
    @ApiProperty({
        example: 'Category Id'
    })
    categoryId: string;
}