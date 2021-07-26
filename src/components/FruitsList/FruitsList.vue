<template>
  <div class="fruits-container">
    <single-fruit v-for="fruit in fruits" :key="fruit._id" :fruit="fruit" />
  </div>
</template>

<script>
/*import banana from "../../assets/bananaimg.jpg";
import apple from "../../assets/appleimg.jpeg";
import orange from "../../assets/orangeimg.jpg";*/

import SingleFruit from "../SingleFruit/SingleFruit";

export default {
  props: {
    fruits: Array,
  },
  components: {
    singleFruit: SingleFruit,
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.fruits-container {
  width: 100%;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 25rem);
  grid-auto-rows: 20rem;
  grid-column-gap: 20px;
  row-gap: 20px;
  padding: 1rem;
  align-items: center;

  @media only screen and (max-width: 766px) {
    order: 3;
  }

  @media only screen and (max-width: 500px) {
    order: 3;
    padding: 1rem;
    grid-template-columns: 1fr;
  }
}
</style>