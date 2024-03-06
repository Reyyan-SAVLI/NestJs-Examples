import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';

@Controller('category')
@ApiTags('Category')
export class CategoryController {

    constructor(private readonly categoryService: CategoryService){}

    @Get()
    async getAll(){
       return await this.categoryService.getAll();
    }

    @Post()
    async create(@Body() createCategoryDto: CreateCategoryDto){
       return await this.categoryService.create(createCategoryDto);
    }

    @Patch(':categoryId')
    async update(
        @Param('categoryId') categoryId: string,
        @Body() createCategoryDto: CreateCategoryDto){
       return await this.categoryService.update(categoryId,createCategoryDto);
    }

    @Delete(':categoryId')
    async delete(@Param('categoryId') categoryId: string){
        return await this.categoryService.delete(categoryId);
    }
}
