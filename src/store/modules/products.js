import axios from 'axios';

const state = {
    products : [],
    totalProducts : 0,
    productsLoading: false,
    buttonLoading: false,
    cartItems: [],
    cartLoading: false,
    finalPrice: 0
};

const getters = {
    products(state){
        return state.products
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
    }
}

const mutations = {
    pushProducts(state, data){
        state.products = data.products;
        state.totalProducts = data.total;
    },
    pushToCart(state, data){
        console.log(data)
    },
    pushCartitems(state, data){
        state.cartItems = data.cartItems;
        state.finalPrice = data.finalPrice
    },
    deleteFromCart(state, id){
        let index = state.cartItems.map(item => {
            return item._id
        }).indexOf(id)
        state.cartItems.splice(index, 1)
    }
}

const actions = {
    getProducts({commit, state}){
        state.productsLoading = true;
        axios.get('/client/shop/getProducts?page=1&order=-1&date=1')
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
    addToCart({commit, state}, payload){
        state.buttonLoading = true;
        axios.put('/client/shop/cart/addProduct', payload)
        .then(res => {
            console.log(res);
            state.buttonLoading = false;
            commit('pushToCart', res.data)
            window.alert('Product Added Successfully!')
        })
        .catch(err => {
            state.buttonLoading = false;
            console.log(err)
        })
    },
    getCart({commit, state}){
        state.cartLoading = true;
        axios.get('/client/shop/getCart')
        .then(res => {
            console.log(res)
            state.cartLoading = false;
            commit('pushCartitems', res.data)
        })
        .catch(err => {
            state.cartLoading = false;
            console.log(err.response)
        })        
    },
    deleteFromCart({commit}, id){
        axios.delete('/shop/cart/deleteItem', {
            productId: id
        })
        .then(res => {
            console.log(res)
            commit('deleteFromCart', id)
        })
        .catch(err => {
            console.log(err)
        })
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}