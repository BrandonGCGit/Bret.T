import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/recover',
      name: 'recover',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/RecoverView.vue')
    },
    {
      path: '/profile/:id?',
      name: 'profile',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ProfileView.vue'),

    },
    {
      path: '/addJob/:id',
      name: 'addJob',
      component:() => import('../views/AddJobView.vue')
    },
    {
      path: '/editJob/:id',
      name: 'editJob',
      component:() => import('../views/EditJobView.vue')
    },
    {
      path: '/editProfile/:id',
      name: 'editProfile',
      component:() => import('../views/EditProfileView.vue')
    },
    {
      path: '/search',
      name: 'search',
      component:() => import('../views/SearchView.vue')
    }
  ]
})

export default router
