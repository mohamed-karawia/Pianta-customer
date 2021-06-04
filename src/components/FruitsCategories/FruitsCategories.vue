<template>
  <div class="categories">
    <div class="categories--header">
      <svg class="categories--header__icon">
        <use xlink:href="../../assets/sprite.svg#icon-menu"></use>
      </svg>

      <h2 class="categories--header__heading">Fruits List</h2>
    </div>
    <div class="categories--list">
      <ul class="categories--list__ul">
        <li class="categories--list__item">
          <div class="img" :style="`background-image: url(${apple});`"></div>
          <h3>apple</h3>
        </li>
        <li class="categories--list__item">
          <div class="img" :style="`background-image: url(${banana});`"></div>
          <h3>banana</h3>
        </li>
        <li class="categories--list__item">
          <div class="img" :style="`background-image: url(${orange});`"></div>
          <h3>orange</h3>
        </li>
        <li class="categories--list__item">
          <div class="img" :style="`background-image: url(${apple});`"></div>
          <h3>apple</h3>
        </li>
        <li class="categories--list__item">
          <div class="img" :style="`background-image: url(${banana});`"></div>
          <h3>banana</h3>
        </li>
        <li class="categories--list__item">
          <div class="img" :style="`background-image: url(${orange});`"></div>
          <h3>orange</h3>
        </li>
        <li class="categories--list__item">
          <div class="img" :style="`background-image: url(${apple});`"></div>
          <h3>apple</h3>
        </li>
        <li class="categories--list__item">
          <div class="img" :style="`background-image: url(${banana});`"></div>
          <h3>banana</h3>
        </li>
        <li class="categories--list__item">
          <div class="img" :style="`background-image: url(${orange});`"></div>
          <h3>orange</h3>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import banana from "../../assets/banana.jpeg";
import apple from "../../assets/apple.png";
import orange from "../../assets/orange.jpg";
export default {
  data() {
    return {
      banana,
      apple,
      orange,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../sass/global.scss";

.categories {
  width: 20%;
  min-width: 20rem;
  border-radius: 1rem;
  -webkit-box-shadow: 1px 5px 10px 0px rgba(50, 50, 50, 0.158);
  -moz-box-shadow: 1px 5px 10px 0px rgba(50, 50, 50, 0.158);
  box-shadow: 1px 5px 10px 0px rgba(50, 50, 50, 0.158);
  margin-bottom: 4rem;

  @media only screen and (max-width: 766px) {
      min-width: 100%;
      order: 2;
  }

  &--header {
    display: flex;
    align-items: center;
    padding: 0 2rem;
    color: #ffff;
    background-color: $primary-color;
    font-size: 1.4rem;
    border-radius: 1rem 1rem 0 0;
    height: 4rem;

    &__icon {
      width: 2.2rem;
      height: 2.2rem;
      fill: #ffff;
      margin-right: 0.5rem;
    }
  }

  &--list {
    &__ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      

      @media only screen and (max-width: 766px) {
        overflow-x: scroll;
        flex-direction: row;
      }
    }

    &__item {
      display: flex;
      padding: 0.4rem 2rem;
      align-items: center;
      cursor: pointer;
      position: relative;
      border-bottom: 1px solid rgb(238, 238, 238);

      @media only screen and (max-width: 766px) {
        width: 100%;
      }

      &::after {
        content: "";
        position: absolute;
        left: 0;
        width: 0%;
        opacity: 0;
        height: 100%;
        background-color: $primary-color;
        //z-index: 1;
        transition: 0.5s all;
        
      }

      &:hover::after {
        width: 100%;
        opacity: 1;
        
      }

      &:hover {
        h3 {
          color: white;
          
        }
      }

      .img {
        width: 3rem;
        height: 3rem;
        z-index: 3;
        background-size: cover;
        background-position: center;
        margin-right: 1rem;
        mix-blend-mode: multiply;

      }

      h3 {
        font-size: 1.6rem;
        font-weight: 500;
        z-index: 2;
        text-transform: capitalize;
        transition: 0.5s all;
      }
    }
  }
}
</style>    