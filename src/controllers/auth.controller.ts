import { IUser } from '../interfaces/user.interface';
import { Request, Response, NextFunction } from 'express';

import passport from 'passport';

class AuthController {
  async login (req: Request, res:Response, next: NextFunction) {
    passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login', failureFlash: true }, (err: Error, user: IUser) => {
      if (err) {
        return next(err);
      }

      if (!user) {
        return res.redirect('/login');
      }

      req.logIn(user, (err) => {
        if (err) { return next(err); }
        res.redirect('/');
      });
    })(req, res, next);
  }

  async logout (req: Request, res: Response) {
    req.logout();
    res.redirect('/');
  }
}

export default new AuthController();
