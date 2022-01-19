import { UpdateProfileService } from '@modules/users/services/UpdateProfileService';
import { Request, Response } from 'express';
import { instanceToInstance } from 'class-transformer';
import { container } from 'tsyringe';

class UpdateProfileController {
  async handle(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;

    const { name, email, password, old_password } = request.body;

    const updateProfileService = container.resolve(UpdateProfileService);

    const updateProfile = await updateProfileService.execute({
      user_id,
      name,
      email,
      password,
      old_password,
    });

    return response.json(instanceToInstance(updateProfile));
  }
}

export { UpdateProfileController };
