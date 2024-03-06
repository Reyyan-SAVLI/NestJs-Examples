import {Column, Entity, OneToMany} from "typeorm";
import { MyBaseEntity } from "src/entities/my.base.entity";
import { Product } from "src/product/entities/product.entity";


@Entity()
export class User extends MyBaseEntity{

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    birthday!: Date;

    @OneToMany(()=> Product, (product) => product.user)
    products: Product[];
}