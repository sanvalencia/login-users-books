import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BookDocument = Book & Document;

@Schema({
  timestamps: true,
})
export class Book {
  @Prop()
  title: string;

  @Prop()
  genre: string;

  @Prop()
  description: string;

  @Prop()
  pages: number;

  @Prop([String])
  keywords: string[];
}

export const BookSchema = SchemaFactory.createForClass(Book);
