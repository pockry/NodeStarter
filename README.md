Node Starter 
=======================

**在线Demo**: working

一个为国人Nodejs开发者准备的新手模板项目。

基于sahat的Hackathon Starter修改而成。

###界面展示

working

主要内容
-----------------

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Generator](#generator)
- [Obtaining API Keys](#obtaining-api-keys)
- [Project Structure](#project-structure)
- [List of Packages](#list-of-packages)
- [Useful Tools and Resources](#useful-tools-and-resources)
- [Recommended Design Resources](#recommended-design-resources)
- [Recommended Node.js Libraries](#recommended-nodejs-libraries)
- [Recommended Client-side Libraries](#recommended-client-side-libraries)
- [Pro Tips](#pro-tips)
- [FAQ](#faq)
- [How It Works](#how-it-works-mini-guides)
- [Mongoose Cheatsheet](#mongoose-cheatsheet)
- [Deployment](#deployment)
- [Changelog](#changelog)
- [Contributing](#contributing)
- [License](#license)

特性
--------

working

环境依赖
-------------

- [MongoDB](http://www.mongodb.org/downloads)
- [Node.js](http://nodejs.org)
- Command Line Tools
 - **Mac OS X**: [Xcode](https://itunes.apple.com/us/app/xcode/id497799835?mt=12) (or **OS X 10.9 Mavericks**: `xcode-select --install`)
 - **Windows**: [Visual Studio](http://www.visualstudio.com/downloads/download-visual-studio-vs#d-express-windows-8)
 - **Ubuntu**: `sudo apt-get install build-essential`
 - **Fedora**: `sudo yum groupinstall "Development Tools"`
 - **OpenSUSE**: `sudo zypper install --type pattern devel_basis`

安装使用
---------------

The easiest way to get started is to clone the repository:

```bash
# Get the latest snapshot
git clone --depth=1 https://github.com/sahat/hackathon-starter.git myproject

cd myproject

# Install NPM dependencies
npm install

node app.js
```

项目结构
-----------------

| Name                               | Description                                                 |
| ---------------------------------- |:-----------------------------------------------------------:|
| **config**/passport.js             | Passport Local and OAuth strategies, plus login middleware. |
| **config**/secrets.js              | Your API keys, tokens, passwords and database URL.          |
| **controllers**/api.js             | Controller for /api route and all api examples.             |
| **controllers**/contact.js         | Controller for contact form.                                |
| **controllers**/home.js            | Controller for home page (index).                           |
| **controllers**/user.js            | Controller for user account management.                     |
| **models**/User.js                 | Mongoose schema and model for User.                         |
| **public**/                        | Static assets (fonts, css, js, img).                        |
| **public**/**js**/application.js   | Specify client-side JavaScript dependencies.                |
| **public**/**js**/main.js          | Place your client-side JavaScript here.                     |
| **public**/**css**/styles.less     | Main stylesheet for your app.                               |
| **public/css/themes**/default.less | Some Bootstrap overrides to make it look prettier.          |
| **views/account**/                 | Templates for *login, password reset, signup, profile*.     |
| **views/api**/                     | Templates for API Examples.                                 |
| **views/partials**/flash.jade      | Error, info and success flash notifications.                |
| **views/partials**/navigation.jade | Navbar partial template.                                    |
| **views/partials**/footer.jade     | Footer partial template.                                    |
| **views**/layout.jade              | Base template.                                              |
| **views**/home.jade                | Home page template.                                         |
| app.js                             | Main application file.                                      |


模块列表
----------------

| Package                         | Description   |
| ------------------------------- |:-------------:|
| async                           | Utility library that provides asynchronous control flow. |
| bcrypt-nodejs                   | Library for hashing and salting user passwords. |
| connect-assets                  | Compiles LESS stylesheets, concatenates & minifies JavaScript. |
| connect-mongo                   | MongoDB session store for Express. |
| csso                            | Dependency for connect-assets library to minify CSS. |
| express                         | Node.js web framework. |
| body-parser                     | Express 4.0 middleware. |
| cookie-parser                   | Express 4.0 middleware. |
| express-session                 | Express 4.0 middleware. |
| morgan                          | Express 4.0 middleware. |
| compression                     | Express 4.0 middleware. |
| errorhandler                    | Express 4.0 middleware. |
| method-override                 | Express 4.0 middleware. |
| express-flash                   | Provides flash messages for Express. |
| express-validator               | Easy form validation for Express. |
| jade                            | Template engine for Express. |
| less                            | LESS compiler. Used implicitly by connect-assets. |
| lusca                           | CSRF middleware.        |
| mongoose                        | MongoDB ODM. |
| node-foursquare                 | Foursquare API library. |
| node-linkedin                   | LinkedIn API library. |
| nodemailer                      | Node.js library for sending emails. |
| passport                        | Simple and elegant authentication library for node.js |
| passport-github                 | Sign-in with GitHub plugin. |
| passport-google-oauth           | Sign-in with Google plugin. |
| passport-twitter                | Sign-in with Twitter plugin. |
| passport-instagram              | Sign-in with Instagram plugin. |
| passport-local                  | Sign-in with Username and Password plugin. |
| passport-linkedin-oauth2        | Sign-in with LinkedIn plugin. |
| passport-oauth                  | Allows you to set up your own OAuth 1.0a and OAuth 2.0 strategies. |
| request                         | Simplified HTTP request library. |
| stripe                          | Offical Stripe API library. |
| tumblr.js                       | Tumblr API library. |
| twilio                          | Twilio API library. |
| twit                            | Twitter API library. |
| lodash                          | Handy JavaScript utlities library. |
| uglify-js                       | Dependency for connect-assets library to minify JS. |
| validator                       | Used in conjunction with express-validator in **controllers/api.js**. |
| mocha                           | Test framework. |
| chai                            | BDD/TDD assertion library. |
| supertest                       | HTTP assertion library. |
| multiline                       | Multi-line strings for the generator. |
| blessed                         | Interactive command line interface for the generator. |
| yui                             | Used by the Yahoo API example. |


FAQ or 教程
---

working

部署
----------
working

License
-------

The MIT License (MIT)
