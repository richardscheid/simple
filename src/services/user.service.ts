import User from '@models/User';
import { IUser } from '@interfaces/user/user.interface';

class UserService {
  async findAll ():Promise<IUser[]> {
    return await User.find();
  }

  async findById (id:string, callback?):Promise<IUser | null> {
    return await User.findById(id, callback).lean();
  }

  async findOne (email:string, callback?): Promise<IUser | null> {
    return await User.findOne(<IUser>{ email: email.toLowerCase() }, callback);
  }

  async create (user:IUser): Promise<IUser> {
    return await User.create(user);
  }
}

export default new UserService();
