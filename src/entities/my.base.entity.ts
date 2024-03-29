import { BeforeInsert, CreateDateColumn, DeepPartial, DeleteDateColumn, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";

export abstract class MyBaseEntity{

   constructor(input?: DeepPartial<any>) {
      if (input) {
        for (const [key, value] of Object.entries(input)) {
          (this as any)[key] = value;
        }
      }
   }

   @PrimaryColumn()
   id: string;

   @BeforeInsert()
   async beforeInsert(){
      this.id = uuidv4();
   }

   @CreateDateColumn()
   createdAt!: Date;

   @UpdateDateColumn()
   updatedAt!: Date;

   @DeleteDateColumn()
   deletedAt!: Date;
}