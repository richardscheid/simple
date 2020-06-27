import { Document } from 'mongoose';

export interface IUser extends Document {
  name: string,
  email: string,
  password: string,
  tokens: AuthToken[],
  comparePassword: comparePasswordFunction
}

export interface AuthToken {
  kind:string;
  accessToken: string;
}

export type comparePasswordFunction = (candidatePassword: string, callback: (err: any, isMatch: any) => unknown) => void;
