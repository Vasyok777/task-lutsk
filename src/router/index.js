import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/store'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/RegisterView.vue'),
  },
  {
    path: '/person',
    alias: '/person/dashboard',
    name: 'person',
    component: () => import('@/views/PersonView.vue'),
    meta: {
      auth: true
    },
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@/components/person/DashboardPerson.vue'),
      },
      {
        path: 'withdraw',
        name: 'withdraw',
        component: () => import('@/components/person/WithDrawPerson.vue'),
      },
      {
        path: 'deposits',
        name: 'deposits',
        component: () => import('@/components/person/DepositsPerson.vue'),
      },
      {
        path: 'shop',
        name: 'shop',
        component: () => import('@/components/person/ShopPerson.vue'),
      },
      {
        path: 'settings',
        name: 'settings',
        component: () => import('@/components/person/SettingsPerson.vue'),
      },
      {
        path: 'profile',
        name: 'profile',
        component: () => import('@/components/person/ProfilePerson.vue'),
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, _, next)=>{
  const store = useAuthStore();
  const requireAuth = to.meta.auth;
  if(requireAuth && store.isAuthenticated){
    next()
  } else if(requireAuth && !store.isAuthenticated){
    next('/login?message=auth')
  }else{
    next()
  }
})

export default router
