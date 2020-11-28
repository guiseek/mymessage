import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { UserEntity } from '@mymessage/core/entities'
import { Document } from 'mongoose'
export type UserDocument = User & Document

@Schema()
export class User implements UserEntity {
  @Prop()
  email: string

  @Prop()
  password: string
}

export const UserSchema = SchemaFactory.createForClass(User)
