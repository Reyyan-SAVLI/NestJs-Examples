import { Category } from "src/category/entities/category.entity";
import { Product } from "src/product/entities/product.entity";
import { User } from "src/user/entities/user.entity";
import * as dotenv from 'dotenv';
import { DataSourceOptions } from "typeorm";

dotenv.config();

export function getConfig(){
   return {
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
        entities: [User, Product, Category],
        synchronize: true
    } as DataSourceOptions;
}