import axios from 'axios';

const state = {
    products : [],
    totalProducts : 0,
    productsLoading: false,
    buttonLoading: false,
    cartItems: [],
    cartLoading: false,
    finalPrice: 0,
    showBackdrop: false,
    alert: '',
    errorAlert: ''
};

const getters = {
    products(state){
        return state.products
    },
    total(state){
        return state.totalProducts
    },
    productsLoading(state){
        return state.productsLoading
    },
    buttonLoading(state){
        return state.buttonLoading
    },
    cartList(state){
        return state.cartItems
    },
    cartLoading(state){
        return state.cartLoading
    },
    finalPrice(state){
        return state.finalPrice
    },
    backdrop(state){
        return state.showBackdrop
    },
    backdropMessage(state){
        return state.alert
    },
    backdropError(state){
        return state.errorAlert
    }
}

const mutations = {
    pushProducts(state, data){
        state.products = data.products;
        state.totalProducts = data.total;
    },
    pushCartitems(state, data){
        state.cartItems = data.cartItems;
        state.finalPrice = data.finalPrice
    },
    deleteFromCart(state, data){
        let index = state.cartItems.map(item => {
            return item._id
        }).indexOf(data.productId)
        state.cartItems.splice(index, 1)
    },
    checkOut(){
        console.log('rerer')
    },
    showBackdrop(state, message){
        state.showBackdrop = true;
        state.alert = message
        state.errorAlert = ''
    },
    backdropError(state, error){
        state.showBackdrop = true;
        state.errorAlert = error
        state.alert = ''
    },
    hideBackdrop(){
        state.showBackdrop = false
        state.backdropMessage = '';
    }
}

const actions = {
    getProducts({commit, state}, filters){
        state.productsLoading = true;
        let link =  `/client/shop/getProducts?page=${filters.page}&order=-1&date=1`
        if (filters.type && filters.type !== 'all'){
            link = `/client/shop/getProducts?page=${filters.page}&order=-1&date=1&productType=${filters.type}`
        }
        axios.get(link)
        .then(res => {
            console.log(res)
            state.productsLoading = false;
            commit('pushProducts', res.data)
        })
        .catch(err => {
            state.productsLoading = false;
            console.log(err.response)
        })
    },
    addToCart({dispatch, commit, state}, payload){
        state.buttonLoading = true;
        axios.put('/client/shop/cart/addProduct', payload)
        .then(() => {
            state.buttonLoading = false;
            dispatch('getCart')
            const msg = 'Product Added Successfully!'
            commit('showBackdrop', msg)
        })
        .catch(err => {
            state.buttonLoading = false;
            console.log(err.response)
        })
    },
    getCart({commit, state}){
        state.cartLoading = true;
        axios.get('/client/shop/getCart')
        .then(res => {
            state.cartLoading = false;
            console.log(res)
            commit('pushCartitems', res.data)
        })
        .catch(err => {
            state.cartLoading = false;
            console.log(err.response)
        })        
    },
    deleteFromCart({commit}, data){
        document.body.style.cursor = "wait"
        axios.delete('/client/shop/cart/deleteItem', {
            data: data
        })
        .then(res => {
            console.log(res)
            commit('deleteFromCart', data)
            document.body.style.cursor = "default"
            const msg = 'Product deleted Successfully!'
            commit('showBackdrop', msg)
        })
        .catch(err => {
            console.log(err.response)
            document.body.style.cursor = "default"
        })
    },
    checkOut({dispatch, commit}, data){
        axios.post('/client/shop/makeOrder', data)
        .then(res => {
            console.log(res)
            dispatch('getCart')
            const msg = 'Paid Successfully!, check your orders'
            commit('showBackdrop', msg)
        })
        .catch(err => {
            console.log(err.response)
            commit('backdropError', err.response.data.message)
            dispatch('getCart')
        })
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}