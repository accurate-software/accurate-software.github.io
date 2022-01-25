import { IUser } from '@modules/users/domain/models/IUser';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';

import { v4 as uuidV4 } from 'uuid';
import { ObjectLostFound } from '@modules/objects/infra/typeorm/entities/ObjectLostFound';

@Entity('users')
class User implements IUser {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  @Exclude()
  password: string;

  @Column()
  avatar: string;

  @Column()
  isAdmin: boolean;

  @OneToMany(() => ObjectLostFound, object_lost_found => object_lost_found.user)
  object_lost_found: ObjectLostFound[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { User };
