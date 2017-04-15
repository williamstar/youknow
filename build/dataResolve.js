

module.exports = function (router) {

  // 获取用户的一些信息
  router.get('/user', (req, res) => {
    res.json({
      status: 'success',
      data: data.user
    });
  });
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
        }
        else {
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
  return router;
};
