import { IObjectImage } from '../models/IObjectImage';

interface IObjectsImagesRepository {
  create(object_id: string, image_name: string): Promise<IObjectImage>;
}

export { IObjectsImagesRepository };
