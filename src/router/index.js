import { createRouter, createWebHistory } from 'vue-router'
const Home = () => import("@/views/pages/Home.vue")
const Register = () => import("@/views/auth/Register.vue")
const Login = () => import("@/views/auth/Login.vue")

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/admin/home',
      name: 'Home',
      component: Home
    }
  ]
})

export default router
