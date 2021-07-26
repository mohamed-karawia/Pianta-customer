<template>
  <div id="app">
    <Navbar v-if="this.$route.name != 'Login'" />
    <router-view />
    <Footer v-if="this.$route.name != 'Login' && !loading && !productsLoading" />
  </div>
</template>

<script>
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer.vue";
export default {
  components: {
    Navbar,
    Footer,
  },
  created() {
    this.$store.dispatch("tryAutoLogin");
  },
  computed: {
    loading() {
      return this.$store.getters.ordersLoading;
    },
    productsLoading() {
      return this.$store.getters.productsLoading;
    },
  },
};
</script>

<style lang="scss">
@import "./sass/global.scss";

html {
  overflow-x: hidden;
  font-size: 62.5%; //1rem = 10px

  /*@media only screen and (max-width: 500px){
        font-size: 80%;
    }*/
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  //font-family: 'Gilroy', sans-serif;
  font-family: "Quicksand", sans-serif;
}

body {
  overflow-x: hidden;
  margin-top: 10rem;
  padding: 0 2rem;
  @media only screen and (max-width: 500px) {
  }
}

/******Pagintaion************ */
.container-class {
  display: flex;
  justify-content: space-between;
  color: black;
  margin-top: 4rem;
  font-size: 1.4rem;

  align-self: center;
  list-style: none;
}

li.page-class {
  border: 1px solid $primary-color;
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0.5rem;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background-color: $primary-color;
    color: #fff;
  }

  a {
    width: 100%;
    text-align: center;
  }
}

.active-class {
  background-color: $primary-color;
  color: #fff;
}
</style>
