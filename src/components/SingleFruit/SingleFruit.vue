<template>
  <div class="fruit">
    <img :src="`${fruit.imageUrl}`" />
    <div class="fruit--details">
      <h2>{{ fruit.name }}</h2>
      <h3 v-if="fruit.fresh !== 'none'">{{ fruit.fresh }} fresh</h3>
      <h3>{{ fruit.quantity }} in stock</h3>
      <h4>{{ fruit.price }} L.E</h4>
      <div class="fruit--buttons">
        <Quantity
          :stock="fruit.quantity"
          :quantity="quantity"
          v-on:increaseQuantity="quantity++"
          v-on:decreaseQuantity="quantity--"
        />
        <button @click="addToCart">Add To Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
import Quantity from "../Quantity/Quantity";

export default {
  data() {
    return {
      quantity: 0,
    };
  },
  props: {
    fruit: Object,
  },
  components: {
    Quantity,
  },
  methods: {
    addToCart() {
      const payload = {
        productId: this.fruit._id,
        amount: this.quantity,
      };
      if (this.quantity === 0) {
        this.$store.commit("backdropError", "Please enter valid quantity");
      } else {
        this.$store.dispatch("addToCart", payload);
        this.quantity = 0;
      }
    },
  },
  computed: {
    buttonLoading() {
      return this.$store.getters.buttonLoading;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../sass/global.scss";

.fruit {
  border-radius: 1rem;
  -webkit-box-shadow: 1px 5px 10px 0px rgba(50, 50, 50, 0.158);
  -moz-box-shadow: 1px 5px 10px 0px rgba(50, 50, 50, 0.158);
  box-shadow: 1px 5px 10px 0px rgba(50, 50, 50, 0.158);
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0 1rem;
  padding-bottom: 1rem;
  position: relative;

  @media only screen and (max-width: 766px) {
    flex-direction: column;
    //min-width: 25rem;
    height: 20rem;
  }

  @media only screen and (max-width: 500px) {
    flex-direction: row;
    //min-width: 100%;
    align-items: center;
    height: 14rem;
    padding: 0 2rem;
  }

  img {
    max-width: 100%;
    max-height: 50%;
    align-self: center;

    @media only screen and (max-width: 500px) {
      margin-right: 1rem;
      width: 10rem;
    }
  }

  &--details {
    text-transform: capitalize;
    width: 90%;

    @media only screen and (max-width: 500px) {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 80%;
    }

    h2 {
      font-weight: 500;
    }

    h3 {
      color: rgb(95, 95, 95);
    }

    h4 {
      font-weight: 500;
      font-size: 1.5rem;
    }
  }

  &--buttons {
    display: flex;
    justify-content: space-between;
    position: absolute;
    width: 90%;
    left: 50%;
    transform: translateX(-50%);
    bottom: 5px;

    @media only screen and (max-width: 500px) {
      position: static;
      width: auto;
      transform: translateX(0);
      align-items: flex-start;
    }

    button {
      border: none;
      background-color: $secondary-color;
      height: 3rem;
      color: black;
      padding: 0 1rem;
      cursor: pointer;
      //width: 10rem;
    }
  }
}
</style>