import { Category } from '../../../../categories/infra/typeorm/entities/Category';
import { IObject } from '@modules/objects/domain/models/IObject';

import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

import { v4 as uuidV4 } from 'uuid';
import { TypeEnum } from './TypeEnum';

@Entity('objects')
class ObjectLostFound implements IObject {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  comments: string;

  @Column()
  available: boolean;

  @Column({ type: 'enum', enum: TypeEnum })
  type: TypeEnum;

  @Column()
  category_id: string;

  @ManyToOne(() => Category)
  @JoinColumn({ name: 'category_id' })
  category: Category;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
      this.available = true;
    }
  }
}

export { ObjectLostFound };
