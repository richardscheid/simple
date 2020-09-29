import { JWT_SECRET } from '@utils/secrets';
import { IUser } from '@interfaces/user/user.interface';
import { Request, Response, NextFunction } from 'express';

import '../../config/passport';
import jwt from 'jsonwebtoken';
import passport from 'passport';

class AuthController {
  async login (req: Request, res:Response, next: NextFunction) {
    passport.authenticate('login', { failureFlash: true }, (err: Error, user: IUser) => {
      if (err) return res.status(400).json({ auth: false, message: 'Authentication failed! Please check the email and password.' });

      if (!user) return res.status(403).json({ auth: false, message: 'Incorrect email or password.' });

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

  authorize (req: Request, res:Response) {
    let token = req.headers.authorization;

    if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });

    if (!token.startsWith('Bearer ')) return res.status(401).json({ auth: false, message: 'Token format is not valid.' });

    token = token.slice(7, token.length).trimLeft();

    jwt.verify(token, JWT_SECRET, (err) => {
      if (err) return res.status(403).json({ auth: false, message: 'Token is not valid.' });

      return res.json({ auth: true });
    });
  }

  async logout (req: Request, res: Response) {
    req.logout();
    res.redirect('/');
  }
}

export default new AuthController();
