import Vue from 'vue'
import Vuex from 'vuex'
// Modules
import products from './modules/products';
import orders from './modules/orders';
// Axios and routing
import axios from 'axios';
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken: null,
    loading: false,
    error: '',
    clientEmail: '',
    clientId: '',
    clientMobile: '',
    clientName: '',
    image: ''
  },

  getters:{
    isAuthenticated (state) {
      state.idToken ? true : false;
    },
    loading(state){
      return state.loading;
    },
    error(state){
      return state.error;
    },
    token(state){
      return state.idToken
    }
  },

  mutations: {
    authUser(state, data){
      //console.log('triggerd')
      state.idToken = data.token;
      state.clientName = data.clientName;
      state.clientMobile = data.clientMobile;
      state.clientImage = data.image;
      state.clientEmail = data.clientEmail;
      axios.defaults.headers.common['Authorization'] = `auth ${state.idToken}`
      //console.log(this.getters.isAuthenticated)
      //router.push('/')
    },

    clearAuthData (state) {
      state.idToken = null;
      state.clientName = '';
      state.clientMobile = '';
      state.clientImage = '';
      router.push('/login')
    },

    showError(state, res){
      switch(res.data.state){
        case 6:
          state.error = 'User already registered with mobile number';
          break;
        case 26:
          state.error = 'User already registered with email'
          break;
        case 7:
          state.error = 'Email address not found';
          break;
        case 8:
          state.error = 'Wrong Password';
        break;
        default:
          state.error = ''
      }
      
    }
  },

  actions: {
    registerUser({commit, state}, payload){
      state.loading = true;
      axios.put('/client/signup', payload)
      .then(res => {
        console.log(res)
        commit('authUser', res.data.data);
        localStorage.setItem('token', res.data.data.token);
        localStorage.setItem('clientName', res.data.data.clientName);
        localStorage.setItem('clientMobile', res.data.data.clientMobile);
        localStorage.setItem('clientImage', res.data.data.image);
        localStorage.setItem('clientEmail', res.data.data.clientEmail);
        state.loading = false
        router.push('/')
      })
      .catch(err => {
        console.log(err.response)
        state.loading = false
        commit('showError', err.response)
      })
    },

    loginLocal({commit, state}, payload){
      state.loading = true;
      axios.post('/client/login', payload)
      .then(res => {
        state.loading = false
        console.log(res);
        localStorage.setItem('token', res.data.data.token);
        localStorage.setItem('clientName', res.data.data.clientName);
        localStorage.setItem('clientMobile', res.data.data.clientMobile);
        localStorage.setItem('clientImage', res.data.data.image);
        localStorage.setItem('clientEmail', res.data.data.clientEmail);
        commit('authUser', res.data.data)
        router.push('/')
      })
      .catch(err => {
        console.log(err.response)
        state.loading = false 
        commit('showError', err.response)
      })
    },
    tryAutoLogin ({commit}) {
      const data = {
        token: localStorage.getItem('token'),
        sellerName: localStorage.getItem('clientName'),
        clientMobile: localStorage.getItem('clientMobile'),
        clientName: localStorage.getItem('clientName'),
        image: localStorage.getItem('clientImage'),
        clientEmail: localStorage.getItem('clientEmail')
    }
      if (!data.token) {
        return
      }else{
        commit('authUser', data)
      }

    },
    logout ({commit}) {
      localStorage.clear();
      commit('clearAuthData')
    }
  },

  modules: {
    products,
    orders
  }

})
