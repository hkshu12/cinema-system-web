import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('@/views/index'),
      children: [
        {
          path: '/main',
          component: () => import('@/views/main')
        },
        {
          path: '/movie',
          component: () => import('@/views/movie')
        },
        {
          path: '/order',
          component: () => import('@/views/ticketOrder')
        },
        {
          path: '/movielist',
          component: () => import('@/views/movielist')
        },
        {
          path: '/search',
          component: () => import('@/views/search')
        },
        {
          path: '/movie',
          component: () => import('@/views/movie')
        },
        {
          path: '/my/tickets',
          name: 'myTickets',
          component: () => import('@/views/my/tickets')
        },
        {
          path: '/my/vip',
          name: 'myVIP',
          component: () => import('@/views/my/vip')
        }
      ]
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
    }
  ]
})
