import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/index/Index';
import Topic from '@/components/topic/Topic';
import Discovery from '@/components/discovery/Discovery';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
    },
    {
      path: '/topic',
      name: 'topic',
      component: Topic,
    },
    {
      path: '/discovery',
      name: 'discovery',
      component: Discovery,
    },
  ],
});