<template>
  <div class="container">
    <Spinner v-if="loading" />
    <div class="sucess" v-else>
      <svg class="svg">
        <use xlink:href="../assets/alert.svg#icon-check-circle-o"></use>
      </svg>
      <h1>Payment Success</h1>
      <h2>go to <router-link to="/orders?type=started">Orders</router-link></h2>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Spinner from "../components/Spinner/Spinner.vue";

export default {
  data() {
    return {
      loading: false,
    };
  },
  components: {
    Spinner,
  },
  created() {
    this.loading = true;
    const data = {
      locationName: this.$route.query.city,
      locationAddres: this.$route.query.address,
    };
    axios
      .post("/client/shop/makeOrder", data)
      .then((res) => {
        console.log(res);
        this.loading = false;
      })
      .catch((err) => {
        console.log(err.response);
        this.loading = false;
      });
  },
};
</script>

<style lang="scss" scoped>
.sucess {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80vh;

  .svg{
      fill: rgb(91, 241, 91);
      width: 3rem;
      height: 3rem;
  }

  h1{
      font-size: 3rem;
      font-weight: 400;
  }
  h2{
      font-size: 2rem;

      a{
          text-decoration: none;
          font-weight: 400;
      }
  }
}
</style>