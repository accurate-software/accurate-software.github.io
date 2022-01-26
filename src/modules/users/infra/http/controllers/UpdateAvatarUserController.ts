import { Request, Response } from 'express';
import { instanceToInstance } from 'class-transformer';
import { container } from 'tsyringe';
import { UpdateAvatarUserService } from '@modules/users/services/UpdateAvatarUserService';

class UpdateAvatarUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const updateAvatarUserService = container.resolve(UpdateAvatarUserService);

    const updateAvatar = await updateAvatarUserService.execute({
      user_id: request.user.id,
      avatarFileName: request.file?.filename,
    });

    return response.json(instanceToInstance(updateAvatar));
  }
}

export { UpdateAvatarUserController };
