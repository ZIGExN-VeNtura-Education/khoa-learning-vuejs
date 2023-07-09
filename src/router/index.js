import { createRouter, createWebHistory } from 'vue-router'
const Home = () => import("@/views/pages/Home.vue")
const Register = () => import("@/views/auth/Register.vue")
const Login = () => import("@/views/auth/Login.vue")
const Create = () => import("@/views/pages/Create.vue")
const Edit = () => import("@/views/pages/Edit.vue")

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
    },
    {
      path: '/admin/create',
      name: 'Create',
      component: Create
    },
    {
      path: '/admin/edit/:id',
      name: 'Edit',
      component: Edit
    }
  ]
})

export default router
