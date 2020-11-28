import { UserEntity } from '@mymessage/core/entities'

export class User implements UserEntity {
  id: number
  email: string
  password: string
  nickname?: string
  registred = false
}
