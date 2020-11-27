import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateMessageDto } from './create-message.dto';
import { Message, MessageDocument } from './../../schemas/message.schema';

@Injectable()
export class MessageService {
  constructor(@InjectModel(Message.name) private catModel: Model<MessageDocument>) {}

  async create(createMessageDto: CreateMessageDto): Promise<Message> {
    const createdMessage = new this.catModel(createMessageDto);
    return createdMessage.save();
  }

  async findAll(): Promise<Message[]> {
    return this.catModel.find().exec();
  }
}
