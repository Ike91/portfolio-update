import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '../Firebase/firebase'

const routes = [
  {
    path: '/home',
    name: 'home',
    meta: {
      hideNavbar: true,
      hideFooter: true,
    },
    component: () => import('../views/Home.vue')
  },
  {
    path: '/project',
    name: 'project',
    meta: {
      hideNavbar: true,
      hideFooter: true
    },
    component: () => import('../views/Project.vue')
  },
  {
    path: '/skills',
    name: 'skills',
    meta: {
      hideNavbar: true,
      hideFooter: true
    },
    component: () => import('../views/Skills.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    meta: {
      hideNavbar: true,
      hideFooter: true
    },
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/register',
    name: 'register',
    meta: {
      hideNavbar: true,
      hideFooter: true
    },
    component: () => import('../views/Register.vue')
  },
  {
    path: '/resetPassword',
    name: 'resetPassword',
    meta: {
      hideNavbar: true,
      hideFooter: true
    },
    component: () => import('../views/ResetPassword.vue')
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      hideNavbar: true,
      hideFooter: true
    },
    component: () => import('../views/Login.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    meta: {
      hidenavbar: true,
      auth: true,
    },
    component: () => import('../views/auth/Dashboard.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    meta: {
      hidenavbar: true,
      auth: true,
    },
    component: () => import('../views/auth/Profile-dash.vue')
  },
  {
    path: '/project-dash',
    name: 'project-dash',
    meta: {
      hidenavbar: true,
      auth: true,
    },
    component: () => import('../views/auth/Project-dash.vue')
  },
  {
    path: '/inbox-dash',
    name: 'inbox-dash',
    meta: {
      hidenavbar: true,
      auth: true,
    },

    component: () => import('../views/auth/Inbox-dash.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {

  const requiresAuth = to.matched.some(values => values.meta.auth)

  if (requiresAuth && !auth.currentUser) {
    next('/login')
  } else {
    next()
  }
})
router.push('/home');
export default router