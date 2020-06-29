import { Document } from 'mongoose';

export interface IUser extends Document {
  name: string,
  email: string,
  password: string,
  tokens: AuthToken[],
  validatePassword (candidatePassword:string): boolean
}

export interface AuthToken {
  kind: string;
  accessToken: string;
}
