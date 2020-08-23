import { JWT_SECRET } from '@utils/secrets';
import { IUser } from '@interfaces/user.interface';
import { Request, Response, NextFunction } from 'express';

import '../config/passport';
import jwt from 'jsonwebtoken';
import passport from 'passport';

class AuthController {
  async login (req: Request, res:Response, next: NextFunction) {
    passport.authenticate('login', { failureFlash: true }, (err: Error, user: IUser) => {
      if (err) return next(err);

      if (!user) return res.status(401).end();

      req.logIn(user, { session: false }, (err) => {
        if (err) return next(err);

        const payload = { sub: user.email };
        const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });

        return res.json({
          token,
          auth: true
        });
      });
    })(req, res, next);
  }

  authenticate (req: Request, res: Response, next: NextFunction) {
    passport.authenticate('jwt', { session: false })(req, res, next);
  }

  async logout (req: Request, res: Response) {
    req.logout();
    res.redirect('/');
  }
}

export default new AuthController();
