const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const users = mongoose.model('users');

passport.use(new LocalStrategy(
	{ usernameField: 'email' },
	
	async (username, password, done) => {
		try {
			const user = await users.findOne({ email: username });
			
			if (!user) {
				return done(null, false, { message: 'Unrecognized username' });
			}
			
			if (!user.validatePassword(password)) {
				return done(null, false, { message: 'Incorrect password' });
			}
			
			return done(null, user);
		} catch (e) {
			return done(e);
		}
	}
))
