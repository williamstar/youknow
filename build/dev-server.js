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

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()
var data = require('../data.json');
var topics = require('../Topics.json')
var router = express.Router();
let mainTopics = topics.mainTopics;

router.get('/user', (req, res) => {
  res.json({
    status: 'success',
    data: data.user
  });
});

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

router.get('/maintopic/:id/subtopics/', (req, res) => {
  let id = req.params['id'];
  res.json({
    status: 'success',
    data: {
      sub_topics: topics.topics.filter(topic => topic.fid === id)
    }
  });
});

router.get('/topics', (req, res) => {
  return res.json({
    status: 'success',
    data: {
      focus_num: 18,
      main_topics: mainTopics,
      sub_topics: topics.topics.filter(topic => topic.fid === mainTopics[0].id)
    }
  });
});

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
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
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
