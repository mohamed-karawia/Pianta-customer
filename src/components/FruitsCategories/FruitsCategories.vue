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
        <li v-for="(fruit, index) in fruits" :key="index" class="categories--list__item" @click="changeType(fruit.name)">
          <div class="img" :style="`background-image: url(${fruit.img});`"></div>
          <h3>{{fruit.name}}</h3>
        </li>
  
      </ul>
    </div>
  </div>
</template>

<script>
import all from '../../assets/fruits.png'
import banana from "../../assets/banana.png";
import apple from "../../assets/apple.png";
import orange from "../../assets/orange.png";
import acerolas from "../../assets/acerolas.png";
import apricots from "../../assets/apricots.png";
import avocados from "../../assets/avocados.png";
import blackberries from "../../assets/blackberries.png";
import blueberries from "../../assets/blueberries.png";
import cantaloupes from "../../assets/cantaloupes.png";
import coconuts from "../../assets/coconuts.png";
import figs from "../../assets/figs.png";
import grapefruits from "../../assets/grapefruits.png";
import grapes from "../../assets/grapes.png";
import guava from "../../assets/guava.png";
import kiwifruit from "../../assets/kiwifruit.png";
import lemons from "../../assets/lemons.png";
import peaches from "../../assets/peaches.png";
import pears from "../../assets/pears.png";
import pineapple from "../../assets/pineapple.png";
import pomegranates from "../../assets/pomegranates.png";
import raspberries from "../../assets/raspberries.png";
import strawberries from "../../assets/strawberries.png";
import watermelons from "../../assets/watermelons.png";

export default {
  data() {
    return {
      fruits: [
        {name: 'all', img: all},
        {name: 'apples', img: apple},
        {name: 'bananas', img: banana},
        {name: 'oranges', img: orange},
        {name: 'acerolas', img: acerolas},
        {name: 'apricots', img: apricots},
        {name: 'avocados', img: avocados},
        {name: 'blackberries', img: blackberries},
        {name: 'blueberries', img: blueberries},
        {name: 'cantaloupes', img: cantaloupes},
        {name: 'coconuts', img: coconuts},
        {name: 'figs', img: figs},
        {name: 'grapefruits', img: grapefruits},
        {name: 'grapes', img: grapes},
        {name: 'guava', img: guava},
        {name: 'kiwifruit', img: kiwifruit},
        {name: 'lemons', img: lemons},
        {name: 'peaches', img: peaches},
        {name: 'pears', img: pears},
        {name: 'pineapples', img: pineapple},
        {name: 'pomegranates', img: pomegranates},
        {name: 'raspberries', img: raspberries},
        {name: 'strawberries', img: strawberries},
        {name: 'watermelons', img: watermelons},
      ]
    };
  },
  methods: {
    changeType(type) {
      this.$emit("changeType", type);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../sass/global.scss";

.categories {
  min-width: 20rem;
  border-radius: 1rem;
  -webkit-box-shadow: 1px 5px 10px 0px rgba(50, 50, 50, 0.158);
  -moz-box-shadow: 1px 5px 10px 0px rgba(50, 50, 50, 0.158);
  box-shadow: 1px 5px 10px 0px rgba(50, 50, 50, 0.158);
  margin-bottom: 4rem;

  @media only screen and (max-width: 766px) {
    //min-width: unset;
    width: 100%;
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