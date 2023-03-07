import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import membership from '../views/membership.vue'
import notice from '../views/notice.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },

    {
      path: '/membership',
      name: 'membership',
      component: membership,

     },
     
     {
      path: '/notice',
      name: 'notice',
      component: notice,

     },
    // {
    //   path: '/',
    //   name: 'home',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/HomeView.vue')
    // }
  ]
})

export default router
