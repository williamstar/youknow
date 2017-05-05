require('./check-versions')()

var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = require('./webpack.dev.conf')

var dtopics = require('../topicsMixup.json')
var data = require('../data.json');
var mylib = require('./lib');
let mainTypes = dtopics.mainTypes;


// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()

// 在这里注册api router 方便调用各种函数
var router = express.Router();
// 获取用户的一些信息
router.get('/user', (req, res) => {
  res.json({
    status: 'success',
    data:
    {
      "userName": data.userInfo.userName,
      "avatar": data.userInfo.avatar,
    },
  });
});
// 获取答案最近的动态
router.get('/aq-status', (req, res) => {
  res.json({
    status: 'success',
    data: data.notifications.aqStatus
  });
})
// 获取最近的关注的人的状态
router.get('/follower-status', (req, res) => {
  res.json({
    status: 'success',
    data: data.notifications.followerStatus
  });
})
// 获取感谢人的信息
router.get('/thank-status', (req, res) => {
  res.json({
    status: 'success',
    data: data.notifications.thankStatus
  });
})
// 获取最近的其他人发来的消息
router.get('/message', (req, res) => {
  res.json({
    status: 'success',
    data: data.message
  });
})

//用户详细信息
router.get('/userinfo', (req, res) => {
  res.json({
    status: 'success',
    data: data.userInfo
  });
});
// 随机给出2个主题，10个动态
router.get('/fake_answers_or_questions', (req, res) => {
  let tids = [];
  let topics = dtopics.topics;
  let tsize = topics.length;
  dynamics = [];
  while (tids.length <= 2) {
    let idx = Math.floor(Math.random() * tsize);
    if (!tids.some(x => x === idx)) {
      dynamics = dynamics.concat(topics[idx]['dynamics']);
      tids.push(idx);
    }
  }
  res.json({
    status: 'success',
    data: dynamics
  })
})


// 获取最近动态
router.get('/recentdynamic', (req, res) => {
  res.json({
    status: 'success',
    data: {
      recent_dynamic: data.recent_dynamic,
      youknow_live: data.youknow_live,
      youknow_circledesk: data.youknow_circledesk,
      youknow_bookstore: data.youknow_bookstore
    }
  });
});

// 获取类别，然后给予部分的话题
router.get('/maintypes/:id/topics/', (req, res) => {
  let id = req.params['id'];
  let topics = mylib.filterSubTopics(dtopics.topics, id);
  res.json({
    status: 'success',
    data: {
      topics: topics
    }
  });
});

// 返回全部的类别，并且给予3个推荐话题
router.get('/maintypes', (req, res) => {
  let topics = mylib.filterSubTopics(dtopics.topics, mainTypes[0].id);
  let allTopics = dtopics.topics;
  let selectedTopics = [];
  for (let i = 0; i < 3; i += 1) {
    const index = Math.floor(Math.random() * allTopics.length);
    let cntTopic = allTopics[index];
    let obj = {};
    let extractKeys = ['value', 'focusNum', 'avatarLocalPath', 'id', 'hotQuestion'];
    extractKeys.forEach((key) => {
      if (key === 'hotQuestion') {
        obj[key] = cntTopic['dynamics'][0]['question'];
      } else {
        obj[key] = cntTopic[key];
      }
    })
    selectedTopics.push(obj);
  }

  return res.json({
    status: 'success',
    data: {
      focus_num: 18,
      mainTypes: mainTypes,
      topics: topics,
      selectedTopics: selectedTopics,
    }
  });
});

// 获取已关注的动态
router.get('/focus_topics', (req, res) => {
  let topic_list = data.focus_topics.map(val => {
    for (let i = 0; i < data.all_topics.length; i += 1) {
      if (data.all_topics[i].id === val + '') {
        return data.all_topics[i];
      }
    }
  });
  let recommend_topics = data.all_topics.filter(val => {
    return data.focus_topics.indexOf(parseInt(val.id)) === -1;
  }).filter(val => {
    return Math.random() > 0.5;
  });
  res.json({
    status: 'success',
    data: {
      focus_list: topic_list,
      recent_dynamics: data.recent_dynamic,
      recommend_topics: recommend_topics
    }
  });
});

app.use('/api', router);

var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => { }
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({
      action: 'reload'
    })
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = {
      target: options
    }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var uri = 'http://localhost:' + port

var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
  _resolve()
})

var server = app.listen(port)

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
