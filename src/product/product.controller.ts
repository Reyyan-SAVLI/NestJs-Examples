import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
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
    async activeProduct(){
        return await this.productService.all();
    }

    @Post()
    create(@Body() productCreateDto: ProductCreateDto){
        return this.productService.create(productCreateDto);
    }

    @Patch(':id')
    update(
        @Param('id') productId: string,
        @Body() productCreateDto: ProductCreateDto){
        return this.productService.update(productCreateDto);
    }

    @Delete(':id')
    delete(
        @Param('id') productId: string,){
        
        return this.productService.delete(productId);
    }
}
