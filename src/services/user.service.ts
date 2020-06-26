import User from '../models/User';
import { IUser } from '../interfaces/user.interface';

class UserService {
  async findAll ():Promise<IUser[]> {
    return await User.find();
  }

  async findById (id:string):Promise<IUser | null> {
    return await User.findById(id).lean();
  }

  async findOne (email:string): Promise<IUser | null> {
    return await User.findOne(<IUser>{ email: email.toLowerCase() }).lean();
  }

  async create (user:IUser): Promise<IUser> {
    return await User.create(user);
  }
}

export default new UserService();
