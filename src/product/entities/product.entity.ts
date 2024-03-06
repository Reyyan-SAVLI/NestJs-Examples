import {Column, Entity, ManyToOne, PrimaryColumn} from "typeorm";
import { MyBaseEntity } from "src/entities/my.base.entity";
import { User } from "src/user/entities/user.entity";
import { Category } from "src/category/entities/category.entity";

@Entity()
export class Product extends MyBaseEntity{   

   @PrimaryColumn()
   id: string;
   
   @Column()
   name: string;
   
   @ManyToOne(()=>User, (user) => user.products)
   user: User;

   @Column()
   userId: string;

   @ManyToOne(()=>Category, {nullable:true})
   category?: Category;

   @Column()
   categoryId: string;
}