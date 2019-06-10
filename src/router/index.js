import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('@/views/index')
    },
    {
      path: '/index',
      component: () => import('@/views/index')
    },
    {
      path: '/movielist',
      component: () => import('@/views/movielist')
    },
    {
      path: '/movie',
      component: () => import('@/views/movie')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/register')
    },
    {
      path: '/my/profile',
      name: 'myProfile',
      component: () => import('@/views/my/profile')
    },
    {
      path: '/my/tickets',
      name: 'myTickets',
      component: () => import('@/views/my/tickets')
    }
  ]
})
