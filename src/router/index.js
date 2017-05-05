import Vue from 'vue';
import Router from 'vue-router';

import Index from '@/components/index/Index';
import Topic from '@/components/topic/Topic';
import Discovery from '@/components/discovery/Discovery';
import Topics from '@/components/topics/Topics';
import Edit from '@/components/edit/Edit';
// 用户模块
import UserPage from '@/components/userpage/UserPage';
import Activities from '@/components/userpage/Activities';
import Answers from '@/components/userpage/answer/Answers';
import Questions from '@/components/userpage/question/Questions';
import Collections from '@/components/userpage/collection/Collections';
import MainFollowing from '@/components/userpage/MainFollowing';
import MainPins from '@/components/userpage/MainPins';
// 分享模块下的切换模块
import pswitchComponent from '@/components/userpage/pins/SwitchComponent';
// 关注模块下的切换
import fswitchComponent from '@/components/userpage/following/SwitchComponent';

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
      path: '/self/edit',
      component: Edit,
    },
    {
      path: '/self/william',
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
              component: pswitchComponent,
            },
            {
              path: 'posts',
              component: pswitchComponent,
            },
            {
              path: 'columns',
              component: pswitchComponent,
            },
          ],
        },
        {
          path: 'asks',
          component: Questions,
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
              component: fswitchComponent,
            },
            {
              path: 'topics',
              component: fswitchComponent,
            },
            {
              path: 'collections',
              component: fswitchComponent,
            },
            {
              path: 'columns',
              component: fswitchComponent,
            },
            {
              path: 'questions',
              component: fswitchComponent,
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
              component: fswitchComponent,
            },
          ],
        },
      ],
    },
  ],
});
