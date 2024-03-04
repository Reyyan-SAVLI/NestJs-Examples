import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>){

    }

    activeUsers(){
        return [{id: 1, name: 'Reyy'},
        {id: 2, name: 'Heyy'}
    ]}

    async create(createUserDto: CreateUserDto){
        const result = await this.userRepository.create(createUserDto);
        return {message: 'Saved', result};
    }
}
