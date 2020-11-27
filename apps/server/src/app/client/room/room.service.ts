import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateRoomDto } from './create-room.dto';
import { Room, RoomDocument } from './../../schemas/room.schema';

@Injectable()
export class RoomService {
  constructor(@InjectModel(Room.name) private catModel: Model<RoomDocument>) {}

  async create(createRoomDto: CreateRoomDto): Promise<Room> {
    const createdRoom = new this.catModel(createRoomDto);
    return createdRoom.save();
  }

  async findAll(): Promise<Room[]> {
    return this.catModel.find().exec();
  }
}
