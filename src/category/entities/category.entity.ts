import { MyBaseEntity } from "src/entities/my.base.entity";
import { Column, Entity } from "typeorm";

@Entity()
export class Category extends MyBaseEntity{

    @Column()
    name: string;
}