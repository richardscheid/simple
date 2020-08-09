import passport from 'passport';
import passportLocal from 'passport-local';
import UserService from '../services/user.service';

import { IUser } from '../interfaces/user.interface';
import { Request, Response, NextFunction } from 'express';

const LocalStrategy = passportLocal.Strategy;

passport.serializeUser<IUser, any>((user, done) => {
  done(undefined, user._id);
});

passport.deserializeUser((id:string, done) => {
  UserService.findById(id, (err, user) => {
    done(err, user);
  });
});

passport.use(new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
  UserService.findOne(email, (err, user: IUser) => {
    if (err) throw err;

    if (!user) { return done(undefined, false, { message: `Email ${email} not found.` }); }
    if (!user.validatePassword(password)) { return done(undefined, false, { message: 'Invalid email or password.' }); }

    return done(null, user);
  });
}));

export const isAuthenticated = (req: Request, res: Response, next: NextFunction):void => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).send();
};

export const isAuthorized = (req: Request, res: Response, next: NextFunction):void => {
  const provider = req.path.split('/').slice(-1)[0];

  const user = req.user as IUser;
  if (user.tokens.find(token => token.kind === provider)) {
    next();
  } else {
    res.redirect(`/auth/${provider}`);
  }
};
