import Vue from 'vue';
import Router from 'vue-router';

import Index from '@/components/index/Index';
import Topic from '@/components/topic/Topic';
import Discovery from '@/components/discovery/Discovery';
import Topics from '@/components/topics/Topics';
// 用户模块
import UserPage from '@/components/userpage/UserPage';
import Activities from '@/components/userpage/Activities';
import Answers from '@/components/userpage/Answers';
import Asks from '@/components/userpage/Asks';
import Collections from '@/components/userpage/Collections';
import MainFollowing from '@/components/userpage/MainFollowing';
import MainPins from '@/components/userpage/MainPins';
// 分享模块下的模块
import switchComponent from '@/components/userpage/pins/SwitchComponent';
// 关注模块下
import Following from '@/components/userpage/following/Following';
import Fcollections from '@/components/userpage/following/Collections';
import Ftopics from '@/components/userpage/following/Topics';
import Fquestions from '@/components/userpage/following/Questions';
import Fcolumns from '@/components/userpage/following/Columns';

import Followers from '@/components/userpage/followers/Followers';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
    },
    {
      path: '/topic',
      component: Topic,
    },
    {
      path: '/discovery',
      component: Discovery,
    },
    {
      path: '/topics',
      component: Topics,
    },
    {
      path: '/self',
      component: UserPage,
      children: [
        {
          path: '',
          redirect: 'activities',
          component: Activities,
        },
        {
          path: 'activities',
          component: Activities,
        },
        {
          path: 'answers',
          component: Answers,
        },
        {
          path: 'pins',
          component: MainPins,
          children: [
            {
              path: '',
              component: switchComponent,
            },
            {
              path: 'posts',
              component: switchComponent,
            },
            {
              path: 'columns',
              component: switchComponent,
            },
          ],
        },
        {
          path: 'asks',
          component: Asks,
        },
        {
          path: 'collections',
          component: Collections,
        },
        {
          path: 'following',
          component: MainFollowing,
          activeClass: 'light',
          children: [
            {
              path: '',
              component: Following,
            },
            {
              path: 'topics',
              component: Ftopics,
            },
            {
              path: 'collections',
              component: Fcollections,
            },
            {
              path: 'columns',
              component: Fcolumns,
            },
            {
              path: 'questions',
              component: Fquestions,
            },
          ],
        },
        {
          path: 'followers',
          component: MainFollowing,
          activeClass: 'light',
          children: [
            {
              path: '',
              component: Followers,
            },
          ],
        },
      ],
    },
  ],
});
