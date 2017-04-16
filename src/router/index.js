import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/index/Index';
import Topic from '@/components/topic/Topic';
import Discovery from '@/components/discovery/Discovery';
import Topics from '@/components/topics/Topics';
import UserPage from '@/components/UserPage/UserPage';
import Activities from '@/components/UserPage/Activities';
import Answers from '@/components/UserPage/Answers';
import Pins from '@/components/UserPage/Pins';
import Asks from '@/components/UserPage/Asks';
import Collections from '@/components/UserPage/Collections';
import Following from '@/components/UserPage/Following';

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
          component: Pins,
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
