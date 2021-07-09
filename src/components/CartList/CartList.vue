<template>
    <ul v-if="fruits.length > 0">
        <li v-for="fruit in fruits" :key="fruit._id"><cart-item :product="fruit"/></li>
    </ul>
    <h2 v-else>Cart is empty</h2>
</template>

<script>
import CartItem from '../CartItem/CartItem'

export default {
    props: {
        fruits: Array
    },
    components:{
        CartItem
    }
}
</script>

<style lang="scss" scoped>
ul{
    display: flex;
    flex-direction: column;
    list-style: none;
}
</style>