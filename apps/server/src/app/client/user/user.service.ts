import { UpdatePasswordDto } from './update-password.dto'
import { Model } from 'mongoose'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { CreateUserDto } from './create-user.dto'
import { User, UserDocument } from './../../schemas/user.schema'
import { UpdateUserDto } from './update-user.dto'

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private catModel: Model<UserDocument>) {}

  async create(createUser: CreateUserDto): Promise<User> {
    const createdUser = new this.catModel(createUser)
    return createdUser.save()
  }

  async update({ _id, ...updateUser }: UpdateUserDto): Promise<User> {
    const updatedUser = new this.catModel({ _id })
    return updatedUser.update(updateUser)
  }

  async updatePassword({
    _id,
    password,
    newPassword,
  }: UpdatePasswordDto): Promise<User> {
    const updatedPassword = new this.catModel({ _id })
    if (password !== updatedPassword.password) {
      throw new Error('Invalid password')
    }
    return updatedPassword.update({ password: newPassword })
  }

  async findAll(): Promise<User[]> {
    return this.catModel.find().exec()
  }

  async remove(id: string): Promise<User> {
    return this.catModel.findByIdAndDelete(id)
  }
}
