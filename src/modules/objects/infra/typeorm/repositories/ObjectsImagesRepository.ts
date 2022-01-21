import { IObjectImage } from '@modules/objects/domain/models/IObjectImage';
import { IObjectsImagesRepository } from '@modules/objects/domain/repositories/IObjectsImagesRepository';
import { getRepository, Repository } from 'typeorm';
import { ObjectImage } from '../entities/ObjectImage';

class ObjectsImagesRepository implements IObjectsImagesRepository {
  private repository: Repository<ObjectImage>;

  constructor() {
    this.repository = getRepository(ObjectImage);
  }

  async create(object_id: string, image_name: string): Promise<IObjectImage> {
    const objectImage = this.repository.create({
      object_id,
      image_name,
    });

    await this.repository.save(objectImage);

    return objectImage;
  }
}

export { ObjectsImagesRepository };
