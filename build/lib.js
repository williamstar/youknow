module.exports.filterSubTopics = function (topics, id) {
  topics = topics.filter(topic => topic.tid === id);
  let include_key = ['id', 'avatarLocalPath', 'value', 'desc']
  return topics.map(topic => {
    let obj = {};
    include_key.forEach(key => obj[key] = topic[key])
    return obj
  })
}

