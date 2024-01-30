import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { Request } from 'express'
import { hash } from 'bcrypt';

@Injectable()
export class UsersService {

  constructor(@InjectModel(User.name) private readonly userModel:Model<UserDocument>,){}

  async create(createUserDto: CreateUserDto) : Promise<User> {
    const {password} = createUserDto;
    const passwordHash = await hash(password,10)
    createUserDto = {...createUserDto, password:passwordHash}
    return this.userModel.create(createUserDto);
  }

  async findAll(request: Request):Promise<User[]> {
    return this.userModel
      .find(request.query) 
      .setOptions({ sanitizeFilter: true }) 
      .exec();
  }

  async findOne(id: string): Promise<User> {
    return this.userModel.findOne({_id:id}).exec();
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return this.userModel.findOneAndUpdate({_id:id}, updateUserDto, {
      new: true,
    });
  }

  async remove(id: string):Promise<User> {
    return this.userModel.findOneAndDelete({_id:id}).exec();
  }
}
