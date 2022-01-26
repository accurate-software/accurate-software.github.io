import { IObjectImage } from '@modules/objects/domain/models/IObjectImage';
import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('objects_image')
class ObjectImage implements IObjectImage {
  @PrimaryColumn()
  id: string;

  @Column()
  object_id: string;

  @Column()
  image_name: string;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { ObjectImage };
