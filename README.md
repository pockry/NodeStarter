Node Starter 
=======================

**在线Demo**: working

一个面向Nodejs开发者准备的样板项目，为中文网络环境优化。

基于[sahat](https://github.com/sahat)的[Hackathon Starter](https://github.com/sahat/hackathon-starter)修改而成。

###界面展示

working

内容目录
-----------------

- [特性](#features)
- [与Hackathon Starter的不同](#diff-from-hs)
- [环境依赖](#prerequisites)
- [安装](#install)
- [项目结构](#project-structure)
- [快速上手](#getting-started)
- [教程](#resource)
- [FAQ](#faq)
- [部署](#deployment)
- [更新日志](#changelog)
- [贡献者](#contributing)
- [License](#license)

特性
--------

* 使用express 4.x和connect 3.x
* 使用Mongoose简化数据库开发
* 采用MVC项目结构，提供示例，可快速开发
* 生产环境可自动压缩合并js、css文件
* 一个基本完善的用户系统，包括注册、登录、找回密码、账号设置等流程
* 提供第三方账号登录、账号绑定功能示例（以新浪微博为例）

与Hackathon Starter的不同
--------

首先必须要感谢sahat的杰出工作，产生了Hackathon Starter这样绝赞的项目。

我的Nodejs真正入门就是靠对Hackathon Starter的实践和学习一步步开始的，向sahat致敬！

遵循开源的获取与回馈的精神，我也想为社区做一些贡献。我很认同HS中的一些理念比如**简单**、**易用**、**可复用**，但另一些则不太认同，特别是HS中的一些第三方服务相关的部分并不适合国内网络环境，因此我产生了为国内的Nodejs开发者打造一个量身定做的样板项目的想法，这就是NodeStarter。

如果说Hackathon Starter的目标是为Hackathon这样的场景而打造的话，NodeStarter则更注重**学习起步**和**快速开发**，无需再纠缠于烦人的模块版本、初始设置，直接进行业务的开发。另外，增强对生产环境的支持，让NodeStarter开发的项目能直接用于部署！

与Hackathon Starter具体的差异：

* 去掉facebook等国外网站和服务的第三方登录/API示例，增加微博等的第三方登录（TO DO）
* 去掉在contact页面直接发送邮件的功能
* 添加表单的前端验证，基于bootstrap3-validate（TO DO）
* 添加验证码（TO DO）
* 优化用户系统，添加用户组（TO DO）
* 添加在线安装，类似于WordPress（TO DO）
* 添加管理后台，包括功能开关、用户管理（TO DO）

如果你想学习国外网站和服务的登录和API调用，可前往[Hackathon Starter](https://github.com/sahat/hackathon-starter)查看相关源码。

环境依赖
-------------

在使用本项目前，你需要先安装下面的环境和工具：
- [MongoDB](http://www.mongodb.org/downloads)
- [Node.js](http://nodejs.org)
- 命令行工具
 - **Mac OS X**: [Xcode](https://itunes.apple.com/us/app/xcode/id497799835?mt=12) (or **OS X 10.9 Mavericks**: `xcode-select --install`)
 - **Windows**: [Visual Studio](http://www.visualstudio.com/downloads/download-visual-studio-vs#d-express-windows-8)
 - **Ubuntu**: `sudo apt-get install build-essential`
 - **Fedora**: `sudo yum groupinstall "Development Tools"`
 - **OpenSUSE**: `sudo zypper install --type pattern devel_basis`

安装
---------------

如果已安装git(linux和OS X中是系统自带的)，进入命令行输入以下命令：

```bash
git clone --depth=1 https://github.com/pockry/NodeStarter.git nodestarter

cd nodestarter

npm install

npm start
```

当然你也可以下载本项目最新代码zip文件来取代git这一步，后面几步是一样的。

完成上述步骤后，在浏览器输入 http://localhost:3000/ 来验证是否安装成功。

> **注意**：由于国内网络原因，可能在`npm install`时失败，多重复几次这个命令即可（注意使用`npm cache clean`清除缓存），或者使用npm镜像来安装依赖。


项目结构
-----------------

```
app.js             // 项目入口，也是整个项目的心脏，包括express设置、route等
package.json       // 依赖模块清单
config/            // 项目设置，包括secrets和passport
controllers/       // 视图控制器
models/            // mongoose的数据模型
public/            // 静态文件目录，包括样式文件和前端js
views/             // 总视图目录
test/              // 项目测试
```


快速上手
---

working

教程
------

这里列出对项目有用的一些教程。
Node School
Node包教不包会

部署
----------

working

FAQ
------

working

更新日志
-------

working

贡献者
-----

这里将列出本项目的贡献者。欢迎pull request。

License
-------

The MIT License (MIT)
