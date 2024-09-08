// custom.d.ts
import { IUser } from './src/models/UserModel'; // Adjust the import to match your user model path

declare global {
  namespace Express {
    interface Request {
      user?: IUser; // Define the structure of the user object
    }
  }
}
