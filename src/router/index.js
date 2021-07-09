import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

//import store from '../store/index'
import Login from '../views/Login.vue'
import Cart from '../views/Cart.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {
  const isAuth = localStorage.getItem('token')
  if (to.name !== 'Login') {
    if (isAuth) {
      next()
    } else {
      next('/login')
    }
  } else {
    if (!isAuth) {
      next()
    } else {
      next('/')
    }
  }
})


export default router
