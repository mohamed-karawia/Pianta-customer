<template>
  <div class="cartItem">
    <img
      :src="`${product.product.imageUrl}`"
    />
    <div class="fruit--details">
      <h2>{{ product.product.name }}</h2>
      <h3 v-if="product.product.fresh !== 'none'">
        {{ product.product.fresh }} Fresh
      </h3>
      <h3>{{ product.amount }}</h3>
      <h4>{{ product.totalPrice }} L.E</h4>
      <button @click="deleteFromCart(product._id)">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
  },
  methods: {
    deleteFromCart(id) {
      const data = {
        productId: id
      }
      this.$store.dispatch("deleteFromCart", data);
    },
  },
};
</script>

<style lang="scss" scoped>
.cartItem {
  width: 100%;
  -webkit-box-shadow: 1px 5px 10px 0px rgba(50, 50, 50, 0.158);
  -moz-box-shadow: 1px 5px 10px 0px rgba(50, 50, 50, 0.158);
  box-shadow: 1px 5px 10px 0px rgba(50, 50, 50, 0.158);
  display: flex;
  align-items: center;
  margin-top: 1rem;
  border-radius: 10px;
  max-width: 70rem;
  position: relative;

  @media only screen and (max-width: 500px) {
    padding: 1rem 0;
  }

  img {
    width: 12rem;
    margin-right: 4rem;
  }

  .fruit--details {
    display: flex;
    align-items: center;

    @media only screen and (max-width: 500px) {
      flex-direction: column;

      & > * {
        margin-bottom: 0.5rem;
      }
    }

    & > * {
      margin-right: 4rem;
    }

    h2 {
      font-size: 2rem;
      font-weight: 600;
      text-transform: capitalize;

      @media only screen and (max-width: 500px) {
        font-size: 1.6rem;
      }
    }

    h3,
    h4 {
      font-size: 1.5rem;
      font-weight: 500;
    }
  }
}

button {
  border: none;
  background-color: rgb(243, 43, 43);
  height: 3rem;
  color: white;
  padding: 0 1rem;
  cursor: pointer;
  align-self: center;
  border-radius: 10px;
  position: absolute;
  right: 0px;
  //width: 10rem;

  @media only screen and (max-width: 500px) {
    position: static;
  }
}
</style>

