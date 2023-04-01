import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import membership from '../views/membership.vue'
import notice from '../views/notice.vue'
import contact from '../views/contact.vue'
import instructor from '../views/instructor.vue'
import card from '../views/card.vue'
import bkash from '../views/bkash.vue'
import instructions from '../views/instructions.vue'
import equipment from '../views/equipment.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
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
     {
      path: '/contact',
      name: 'contact',
      component: contact,

     },
     {
      path: '/instructor',
      name: 'instructor',
      component: instructor,

     },
     {
      path: '/card',
      name: 'card',
      component: card,

     },
     {
      path: '/bkash',
      name: 'bkash',
      component: bkash,

     },
     {
      path: '/instructions',
      name: 'instructions',
      component: instructions,

     },
     {
      path: '/equipment',
      name: 'equipment',
      component: equipment,

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
