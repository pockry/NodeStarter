/**
 * IMPORTANT * IMPORTANT * IMPORTANT * IMPORTANT * IMPORTANT * IMPORTANT *
 *
 * You should never commit this file to a public repository on GitHub!
 * All public code on GitHub can be searched, that means anyone can see your
 * uploaded secrets.js file.
 *
 * I did it for your convenience using "throw away" credentials so that
 * all features could work out of the box.
 *
 * Untrack secrets.js before pushing your code to public GitHub repository:
 *
 * git rm --cached config/secrets.js
 *
 * If you have already commited this file to GitHub with your keys, then
 * refer to https://help.github.com/articles/remove-sensitive-data
*/

module.exports = {

  db: process.env.MONGOLAB_URI || process.env.MONGODB || 'mongodb://localhost:27017/nodestarter',

  sessionSecret: process.env.SESSION_SECRET || 'Session Secret加密字段',
  
  mandrill: {
    user: process.env.MANDRILL_USER || 'accout',
    password: process.env.MANDRILL_PASSWORD || 'password'
  },

  sendgrid: {
    user: process.env.SENDGRID_USER || 'accout',
    password: process.env.SENDGRID_PASSWORD || 'password'
  },

  twitter: {
    consumerKey: process.env.TWITTER_KEY || '6NNBDyJ2TavL407A3lWxPFKBI',
    consumerSecret: process.env.TWITTER_SECRET  || 'ZHaYyK3DQCqv49Z9ofsYdqiUgeoICyh6uoBgFfu7OeYC7wTQKa',
    callbackURL: '/auth/twitter/callback',
    passReqToCallback: true
  }
};
