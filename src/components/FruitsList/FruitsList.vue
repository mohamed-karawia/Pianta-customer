<template>
    <div class="container">
        <single-fruit v-for="fruit in fruits" :key="fruit._id" :fruit="fruit"/>
    </div>
</template>

<script>
import banana from '../../assets/bananaimg.jpg';
import apple from '../../assets/appleimg.jpeg';
import orange from '../../assets/orangeimg.jpg';

import SingleFruit from '../SingleFruit/SingleFruit';
export default {
    data(){
        return{
            fruits: [
                {_id: 0, img: apple, name: 'fresh apples', fresh: 88, price: 5},
                {_id: 1, img: banana, name: 'fresh banana', fresh: 95, price: 3},
                {_id: 2, img: orange, name: 'fresh orange', fresh: 64, price: 6},
                {_id: 0, img: apple, name: 'fresh apples', fresh: 88, price: 5},
                {_id: 1, img: banana, name: 'fresh banana', fresh: 95, price: 3},
                {_id: 2, img: orange, name: 'fresh orange', fresh: 64, price: 6},
                {_id: 0, img: apple, name: 'fresh apples', fresh: 88, price: 5},
                {_id: 1, img: banana, name: 'fresh banana', fresh: 95, price: 3},
                {_id: 2, img: orange, name: 'fresh orange', fresh: 64, price: 6},
            ]
        }
    },
    components:{
        singleFruit: SingleFruit
    }
}
</script>

<style lang="scss" scoped>
.container{
    //border: 1px solid black;
    width: 55%;
    display: flex;
    flex-wrap: wrap;
    min-width: 20rem;

    @media only screen and (max-width: 1132){
        order: 3;
        min-width: 100%;
        justify-content: space-around;
        //flex-wrap: nowrap;
    }

    @media only screen and (max-width: 500px){
        order: 3;
        min-width: 100%;
        //flex-wrap: nowrap;
    }
}
</style>