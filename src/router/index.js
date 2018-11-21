import Vue from 'vue'
import Router from 'vue-router'
import { VueSpinners } from '@saeris/vue-spinners'

import Layout from '../views/Layout.vue'
import Home from '../components/Home.vue'
import General from '../components/categories/General.vue'
import Technology from '../components/categories/Technology.vue'
import Sports from '../components/categories/Sports.vue'
import Business from '../components/categories/Business.vue'
import Entertainment from '../components/categories/Entertainment.vue'
import Science from '../components/categories/Science.vue'

Vue.use(Router)
Vue.use(VueSpinners)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/news'
    },
    {
      path: '/news', 
      name: 'Layout',
      component: Layout,
      props: true,
      children: [
        {
          name: 'Home',
          path: '',
          component: Home,
          props: true,
        },
        {
          name: 'General',
          path: 'general',
          component: General,
          props: true,
        },
        {
          name: 'Technology',
          path: 'technology',
          component: Technology,
          props: true,
        },
        {
          name: 'Sports',
          path: 'sports',
          component: Sports,
          props: true,
        },
        {
          name: 'Business',
          path: 'business',
          component: Business,
          props: true,
        },
        {
          name: 'Entertainment',
          path: 'entertainment',
          component: Entertainment,
          props: true,
        },
        {
          name: 'Science',
          path: 'science',
          component: Science,
          props: true,
        },
      ],
    }
  ]
})
