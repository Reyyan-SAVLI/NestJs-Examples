import { Injectable } from '@nestjs/common';
import { ProductCreateDto } from './dto/create-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from "uuid";

@Injectable()
export class ProductService {

    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>
    ){}

    async create(productCreateDto: ProductCreateDto){

        const product = new Product();
        product.id = uuidv4();
        product.name = productCreateDto.name;
        const result = await this.productRepository.save(product);
        return result;
    }
}
