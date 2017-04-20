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
import Following from '@/components/userpage/Following';
import MainPins from '@/components/userpage/MainPins';
// 分享模块下的模块
import Pins from '@/components/userpage/pins/Pins';
import Posts from '@/components/userpage/pins/Posts';
import Columns from '@/components/userpage/pins/Columns';

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
              component: Pins,
            },
            {
              path: 'posts',
              component: Posts,
            },
            {
              path: 'columns',
              component: Columns,
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
          component: Following,
          activeClass: 'light',
        },
        {
          path: 'followers',
          component: Following,
          activeClass: 'light',
        },
      ],
    },
  ],
});
