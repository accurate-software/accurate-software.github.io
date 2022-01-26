import { compare, hash } from 'bcrypt';
import { IHashProvider } from '../models/IHashProvider';

class BcryptHashProvider implements IHashProvider {
  generateHash(payload: string): Promise<string> {
    return hash(payload, 8);
  }
  compareHash(payload: string, hashed: string): Promise<boolean> {
    return compare(payload, hashed);
  }
}

export { BcryptHashProvider };
