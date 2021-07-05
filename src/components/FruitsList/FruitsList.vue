<template>
  <div class="fruits-container">
      <single-fruit v-for="fruit in fruits" :key="fruit._id" :fruit="fruit" />
      <Spinner v-if="loading"/>
  </div>
</template>

<script>
/*import banana from "../../assets/bananaimg.jpg";
import apple from "../../assets/appleimg.jpeg";
import orange from "../../assets/orangeimg.jpg";*/

import SingleFruit from "../SingleFruit/SingleFruit";
import Spinner from "../Spinner/Spinner";

export default {
  props: {
    fruits: Array,
  },
  components: {
    singleFruit: SingleFruit,
    Spinner,
  },
  computed: {
    loading() {
      return this.$store.getters.productsLoading;
    },
  },
};
</script>

<style lang="scss" scoped>
.fruits-container {
  width: 100%;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  grid-column-gap: 20px;
  padding: 1rem;
 
  @media only screen and (max-width: 766px) {
    order: 3;

  }

  @media only screen and (max-width: 500px) {
    order: 3;

  }
}
</style>