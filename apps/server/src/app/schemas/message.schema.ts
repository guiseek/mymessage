import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MessageDocument = Message & Document;

@Schema()
export class Message {
  @Prop()
  from: string;

  @Prop()
  to: string;

  @Prop()
  content: string;
}

export const MessageSchema = SchemaFactory.createForClass(Message);
