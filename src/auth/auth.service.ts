import { HttpException, Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginAuthDto } from './dto/login-auth.dto';
import { InjectModel } from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {User,UserDocument } from '../users/schemas/user.schema';
import {compare} from 'bcrypt'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private readonly userModel:Model<UserDocument>, private jwtService:JwtService){}

  async signIn(loginAuthDto: LoginAuthDto){
    const {email, password} = loginAuthDto
    const user = await this.userModel.findOne({email});
    if(!user) new HttpException("User not found", 404);

    const checkpassword = await compare(password, user.password)
    if(!checkpassword) new HttpException("Password is incorrect",403)

    const payload = {id: user.id,name: user.name};
    const token = await this.jwtService.sign(payload)

    const data= {
      user: user,
      token: token
    }
    return data;
  }

}