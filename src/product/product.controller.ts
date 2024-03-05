import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ProductCreateDto } from './dto/create-product.dto';
import { ProductService } from './product.service';

@Controller('product')
@ApiTags('Product')
export class ProductController {

    constructor(private readonly productService: ProductService){}
    
    @Get()
    @ApiOperation({
        summary: 'Active Products',
    })
    activeProduct(){

    }

    @Post()
    create(@Body() productCreateDto: ProductCreateDto){
        return this.productService.create(productCreateDto);
    }
}
