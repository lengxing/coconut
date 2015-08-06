var express = require('express');
var index = require('../controller/Index');
var bbs = require('../controller/Bbs');
var chat = require('../controller/Chat');
var game = require('../controller/Game');
var software = require('../controller/Software');
var user = require('../controller/User');
var auth = require('../middlewares/Auth');
var router = express.Router();

/*主页index*/
router.get('/', index.index);
router.get('/error', index.error);
router.get('/login', index.showLogin);
router.post('/login', index.login);
router.get('/register', index.showRegist);
router.post('/register', index.regist);
router.get('/logout', index.logout);

/*论坛*/
router.get('/bbs', bbs.index);
router.get('/bbs/sendArticle', auth.userAuth, bbs.showSendArticle);
router.post('/bbs/sendArticle', auth.userAuth, bbs.sendArticle);
router.get('/bbs/Article', bbs.showOneArticle);

/*聊天*/
router.get('/chat', chat.index);

/*游戏*/
router.get('/game', game.index);
router.get('/game/fishman', game.fishman);

/*软件*/
router.get('/software', software.index);

/*用户*/
router.get('/user', user.index);

module.exports = router;
