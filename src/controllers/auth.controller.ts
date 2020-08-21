import { JWT_SECRET } from '@utils/secrets';
import { IUser } from '@interfaces/user.interface';
import { Request, Response, NextFunction } from 'express';

import jwt from 'jsonwebtoken';
import passport from 'passport';

class AuthController {
  async login (req: Request, res:Response, next: NextFunction) {
    passport.authenticate('local', { failureFlash: true }, (err: Error, user: IUser) => {
      if (err) return next(err);

      if (!user) return res.status(401).end();

      req.logIn(user, (err) => {
        if (err) return next(err);

        const payload = { email: user.email };
        const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });

        return res.json({
          token,
          auth: true
        });
      });
    })(req, res, next);
  }

  async logout (req: Request, res: Response) {
    req.logout();
    res.redirect('/');
  }
}

export default new AuthController();
