import { UploadObjectImageService } from '@modules/objects/services/UploadObjectImageService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

interface IFiles {
  filename: string;
}

class UploadObjectImageController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const images = request.files as IFiles[];

    const uploadObjectImageService = container.resolve(
      UploadObjectImageService,
    );

    const images_name = images.map(file => file.filename);

    await uploadObjectImageService.execute({
      object_id: id,
      images_name,
    });

    return response.status(201).send();
  }
}

export { UploadObjectImageController };
