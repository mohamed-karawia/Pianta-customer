<template>
  <div class="container">
    <fruits-categories />
    <fruits-list :fruits="products"/>
    <Wallet />
  </div>
</template>

<script>
import FruitsCategories from '../components/FruitsCategories/FruitsCategories';
import Wallet from '../components/Wallet/Wallet';
import FruitsList from '../components/FruitsList/FruitsList';


export default {
  components: {
    fruitsCategories: FruitsCategories,
    Wallet,
    fruitsList: FruitsList
  },
  created(){
    this.$store.dispatch('getProducts')
  },
  computed: {
    products(){
      return this.$store.getters.products
    }
  }
}
</script>

<style lang="scss" scoped>
.container{
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media only screen and (max-width: 766px){
      flex-direction: column;
  }
}
</style>
