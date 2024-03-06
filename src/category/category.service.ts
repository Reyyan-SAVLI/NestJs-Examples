import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { isDefined } from 'class-validator';

@Injectable()
export class CategoryService {

    constructor(
        @InjectRepository(Category)
        private readonly categoryRepository: Repository<Category>
    ){}

    async getAll() {
        const result = await this.categoryRepository.find();
        return result;
    }

    async create(createCategoryDto: CreateCategoryDto) {
        const newCat = new Category();
        newCat.name = createCategoryDto.name;

        return await this.categoryRepository.save(newCat);
    }

    async update(id: string, createCategoryDto: CreateCategoryDto) {
        const findCat = await this.categoryRepository.findOne({
            where:{
                id
            }
        });
        if(isDefined(findCat)){
          findCat.name = createCategoryDto.name;
          return await this.categoryRepository.save(findCat);
        }else{
          return 'Not Found';
        }
    }

    async delete(categoryId: string) {
        return await this.categoryRepository.softDelete(categoryId);
    }     
}
