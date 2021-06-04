import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import store from '../store/index'
import Login from '../views/Login.vue'
import Cart from '../views/Cart.vue'

Vue.use(VueRouter)

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
  /*if (to.name !== 'Login' && !store.getters.isAuthenticated){
     next('/login')
    }
  else next()*/
  if(to.name === 'Login'){
    next()
  }else{
    if(store.getters.isAuthenticated === true){
      next()
    }else{
      console.log(store.getters.isAuthenticated)
      next('/login')
    }
  }

})

export default router
