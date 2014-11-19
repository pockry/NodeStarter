var _ = require('lodash');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var TwitterStrategy = require('passport-twitter').Strategy;
var User = require('../models/User');
var secrets = require('./secrets');
var WeiboStrategy = require('passport-sina');

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

// Sign in using Email and Password.

passport.use(new LocalStrategy({ usernameField: 'email' }, function(email, password, done) {
  User.findOne({ email: email }, function(err, user) {
    if (!user) return done(null, false, { message: '邮箱 ' + email + ' 未注册'});
    user.comparePassword(password, function(err, isMatch) {
      if (isMatch) {
        return done(null, user);
      } else {
        return done(null, false, { message: '邮箱或密码不匹配' });
      }
    });
  });
}));

/**
 * OAuth验证策略概述
 * 
 * 当用户点击“使用XX登录”链接
 * - 若用户已登录
 *   - 检查该用户是否已绑定XX服务
 *     - 如果已绑定，返回错误（不允许账户合并）
 *     - 否则开始验证流程，为该用户绑定XX服务
 * - 用户未登录
 *   - 检查是否老用户
 *     - 如果是老用户，则登录
 *     - 否则检查OAuth返回profile中的email，是否在用户数据库中存在
 *       - 如果存在，返回错误信息
 *       - 否则创建一个新账号
 */

// 微博第三方登录.

passport.use(new WeiboStrategy({
    clientID: '3439067312'
  , clientSecret: '6788d4997d661db7a26b99ea5c03aa46'
  , callbackURL: 'http://127.0.0.1:3000/auth/weibo/callback'
  , passReqToCallback: true
//  , requireState: true // for csrf, default: true
//  , scope: ['statuses_to_me_read'
//          , 'follow_app_official_microblog']
},
function(req, accessToken, refreshToken, profile, done) {
    conslog.log("hhhh");
    // verify
    User.findOne({weibo: profile.id}, function(err, user) {
      if(err) return done(err);
    	if(user) {
    		//如有该用户则直接登录
    		for(var i=0;i< user.thirdParty.length;i++) {
    			if(user.thirdParty[i].provider === "weibo") {
    				user.thirdParty[i].accessToken = accessToken;
    			}
    		}
    		user.save(function(err) {
    			req.flash('info', { msg: '成功使用微博登录。' });
    			return done(err, user);
    		});
    	} else {
    		// 若无该用户则创建用户
    		user = new User();
        user.email = profile.name + "@weibo.com";
    		user.weibo = profile.id;
        user.profile.name = profile.name;
        user.profile.picture = profile.profile_image_url;
        user.thirdParty.push({ provider: 'weibo', accessToken: accessToken, tokenSecret: refreshToken });
    		user.save(function(err) {
            req.flash('info', { msg: '欢迎使用微博登录。' });
            return done(err, user);
          });
    	}
    });
}));

passport.use(new TwitterStrategy(secrets.twitter, function(req, accessToken, tokenSecret, profile, done) {
  if (req.user) {
    User.findOne({ twitter: profile.id }, function(err, existingUser) {
      if (existingUser) {
        req.flash('errors', { msg: 'There is already a Twitter account that belongs to you. Sign in with that account or delete it, then link it with your current account.' });
        done(err);
      } else {
        User.findById(req.user.id, function(err, user) {
          user.twitter = profile.id;
          user.tokens.push({ kind: 'twitter', accessToken: accessToken, tokenSecret: tokenSecret });
          user.profile.name = user.profile.name || profile.displayName;
          user.profile.location = user.profile.location || profile._json.location;
          user.profile.picture = user.profile.picture || profile._json.profile_image_url_https;
          user.save(function(err) {
            req.flash('info', { msg: 'Twitter account has been linked.' });
            done(err, user);
          });
        });
      }
    });

  } else {
    User.findOne({ twitter: profile.id }, function(err, existingUser) {
      if (existingUser) return done(null, existingUser);
      var user = new User();
      // Twitter will not provide an email address.  Period.
      // But a person’s twitter username is guaranteed to be unique
      // so we can "fake" a twitter email address as follows:
      user.email = profile.username + "@twitter.com";
      user.twitter = profile.id;
      user.tokens.push({ kind: 'twitter', accessToken: accessToken, tokenSecret: tokenSecret });
      user.profile.name = profile.displayName;
      user.profile.location = profile._json.location;
      user.profile.picture = profile._json.profile_image_url_https;
      user.save(function(err) {
        done(err, user);
      });
    });
  }
}));

// Login Required middleware.

exports.isAuthenticated = function(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/login');
};

// Authorization Required middleware.

exports.isAuthorized = function(req, res, next) {
  var provider = req.path.split('/').slice(-1)[0];

  if (_.find(req.user.tokens, { kind: provider })) {
    next();
  } else {
    res.redirect('/auth/' + provider);
  }
};