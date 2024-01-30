import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({
  timestamps: true,
})
export class User {

  @Prop({
    trim: true,
    required: true,
  })
  name: string;

  @Prop({
    unique: true,
    trim: true,
    required: true,
  } 
  )
  email: string;

  @Prop({
    trim: true,
    required: true,
  } 
  )
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
