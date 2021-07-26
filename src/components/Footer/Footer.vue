<template>
  <footer class="footer">
    <div class="footer__upper">
      <div class="footer__upper__logo">
        <img :src="Logo" alt="logo" />
        <h2 class="footer__upper__name">Pianta</h2>
      </div>
      <div class="footer__upper__links">
        <h2>Direct Links</h2>
        <ul>
          <li><router-link to="/?page=1">Fruits</router-link></li>
          <li><router-link to="/orders?type=started">Orders</router-link></li>
          <li><router-link to="/cart">Cart</router-link></li>
          <li><button @click="logout">Loguout</button></li>
        </ul>
      </div>
      <div class="footer__upper__links">
        <h2>Social</h2>
        <ul>
          <li><router-link to="/">Facebook</router-link></li>
          <li><router-link to="/">Twitter</router-link></li>
          <li><router-link to="/">Instagram</router-link></li>
        </ul>
      </div>
    </div>
    <div class="footer__bottom">
      <p class="footer__bottom__rights">© All rights reserved. Pianta 2021.</p>
      <ul class="footer__bottom__icons">
        <li>
          <svg class="footer__bottom__icons__icon">
            <use xlink:href="../../assets/social.svg#icon-facebook"></use>
          </svg>
        </li>
        <li>
          <svg class="footer__bottom__icons__icon">
            <use xlink:href="../../assets/social.svg#icon-twitter"></use>
          </svg>
        </li>
        <li>
          <svg class="footer__bottom__icons__icon">
            <use xlink:href="../../assets/social.svg#icon-instagram1"></use>
          </svg>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
import Logo from "../../assets/logo.png";

export default {
  data() {
    return {
      Logo,
    };
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../sass/global.scss";

.footer {
  min-height: 10rem;
  background-color: $primary-color;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin-top: 2rem;



  &__upper {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;

      @media only screen and (max-width: 500px){
      flex-direction: column;
  }

    & > * {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;

            @media only screen and (max-width: 500px){
      margin: 1rem 0;
  }

      h2 {
        color: white;
        font-size: 3rem;
      }

      ul {
        list-style: none;

        li {
          margin-top: .5rem;
        }

        a {
          color: white;
          text-decoration: none;
          font-size: 2rem;
        }
      }

      button {
        padding: 1rem;
        border: none;
        background-color: white;
        color: $primary-color;
        border-radius: 10rem;
        cursor: pointer;
      }
    }

    &__logo {
      align-items: center;
      align-self: center;
      img {
        max-width: 10rem;
      }
    }
  }

  &__bottom {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    border-top: 1px solid white;
    margin-top: 1rem;
    align-items: center;

    &__rights{
        color: white;
        font-size: 1.5rem;
    }

    &__icons {
      display: flex;
      list-style: none;

      &__icon{
          fill: white;
          width: 2rem;
          height: 2rem;
          margin-right: 2rem;
          cursor: pointer;
      }
    }
  }
}
</style>