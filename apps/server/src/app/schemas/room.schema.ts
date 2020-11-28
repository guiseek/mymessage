import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
import { User } from './user.schema'

export type RoomDocument = Room & Document

@Schema()
export class Room {
  @Prop()
  name: string

  @Prop()
  users: User[]
}

export const RoomSchema = SchemaFactory.createForClass(Room)
