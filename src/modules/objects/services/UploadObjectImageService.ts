import { inject, injectable } from 'tsyringe';
import { IObjectsImagesRepository } from '../domain/repositories/IObjectsImagesRepository';

interface IRequest {
  object_id: string;
  images_name: string[];
}

@injectable()
class UploadObjectImageService {
  constructor(
    @inject('ObjectsImagesRepository')
    private objectsImagesRepository: IObjectsImagesRepository,
  ) {}

  async execute({ object_id, images_name }: IRequest): Promise<void> {
    images_name.map(async image => {
      await this.objectsImagesRepository.create(object_id, image);
    });
  }
}

export { UploadObjectImageService };
