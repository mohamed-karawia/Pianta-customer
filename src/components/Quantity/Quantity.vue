<template>
    <div class="quantity">
        <button class="quantity__button" @click="$emit('decreaseQuantity')" :disabled="quantity == 0">&#8722;</button>
        <input type="number" :value="quantity">
        <button class="quantity__button" @click="$emit('increaseQuantity')" :disabled="quantity == stock">&#43;</button>
    </div>
</template>

<script>
export default {
    props: {
        quantity: Number,
        stock: Number
    }
}
</script>

<style lang="scss" scoped>
@import '../../sass/global.scss';

.quantity{
    display: flex;

    &__button{
        width: 1.7rem;
        height: 2.5rem;
        background-color: $primary-color;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
        border: none;
        border-radius: .5rem;
        cursor: pointer;
        //margin-top: 1rem;

        @media only screen and (max-width: 500px){
        //margin-bottom: 1rem;
        width: 2rem;
        }
    }

    input{
        width: 3rem;
        border-radius: 0;     
        border: none;      
        font-size: 2rem;
        padding-left: 8px;
        @media only screen and (max-width: 500px){
            padding-left: 15px;
            padding-bottom: 15px;;
            width: 4rem;
        }
                
    }

    /* Chrome, Safari, Edge, Opera */
            input::-webkit-outer-spin-button,
            input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
            }

            /* Firefox */
            input[type=number] {
            -moz-appearance: textfield;
            }

}

</style>