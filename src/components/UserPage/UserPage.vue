<template>
  <div class="user-page">
    <div class="user-data">
      <div class="cover-wrapper">
        <div class="edit-cover">
          编辑图片
        </div>
      </div>
      <div class="user-main">
        <div class="img-wrapper"><img alt="用户照片"
               width="160"
               height="160"
               :src="user.avatarX"></div>
        <div class="detail">
          <div class="user-header"><span class="username">{{user.userName}}</span><span class="brief-desc">{{user.briefDesc}}</span></div>
          <div class="brief-detail">
            <div class="toggle-full-detail">
              <svg viewBox="0 0 10 6"
                   class="Icon ProfileHeader-arrowIcon Icon--arrow"
                   width="10"
                   height="16"
                   aria-hidden="true"
                   style="height: 16px; width: 10px;">
                <title></title>
                <g>
                  <path d="M8.716.217L5.002 4 1.285.218C.99-.072.514-.072.22.218c-.294.29-.294.76 0 1.052l4.25 4.512c.292.29.77.29 1.063 0L9.78 1.27c.293-.29.293-.76 0-1.052-.295-.29-.77-.29-1.063 0z"></path>
                </g>
              </svg>
              查看详细信息
            </div>
          </div>
          <div class="edit-profile">
            编辑个人资料
          </div>
        </div>
      </div>
    </div>
    <div class="user-interactive">
      <div class="main-interactive">
        <nav class="interactive-header">
          <router-link to="/activities">动态</router-link>
          <router-link to="/answers">回答</router-link>
          <router-link to="/pins">分享</router-link>
          <router-link to="/asks">提问</router-link>
          <router-link to="/collections">收藏</router-link>
          <router-link to="/following">关注</router-link>
        </nav>
        <router-view></router-view>
      </div>
      <div class="focus-part">

      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  props: {
    user: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
.user-page {
  margin: 10px auto 0;
  width: 998px;
}
</style>
