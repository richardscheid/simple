import passport from 'passport'
import passportJwt from 'passport-jwt'
import passportLocal from 'passport-local'

import { JWT_SECRET } from '@config/environments/environments'
import { IUser } from '@domain/user/interfaces/user.interface'
import UserRepositoryDb from '@resources/user/user.repository.db'

const LocalStrategy = passportLocal.Strategy
const JwtStrategy = passportJwt.Strategy
const ExtractJwt = passportJwt.ExtractJwt

passport.use('login', new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
  await UserRepositoryDb.getUserByEmail(email.toLowerCase(), (err, user: IUser) => {
    if (err) throw done(err, false)

    if (!user) return done(null, false)

    if (!user.validatePassword(password)) return done(null, false)

    return done(null, user)
  })
}))

const opts = {
  secretOrKey: JWT_SECRET,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}

passport.use(new JwtStrategy(opts, async (payload, done) => {
  const email = payload.sub
  await UserRepositoryDb.getUserByEmail(email, (err, user: IUser) => {
    if (err) throw done(err, false)

    if (!user) return done(null, false)

    return done(null, user)
  })
}))
