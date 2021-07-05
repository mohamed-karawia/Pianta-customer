<template>
  <div class="cardDetails">
    <h1>Card Details</h1>
    <div class="cards">
      <h2>We accept</h2>
      <div class="cards--images">
        <img
          src="../../assets/master.png"
          alt="mastercard"
          style="margin-right: 1rem"
        />
        <img src="../../assets/visa.jpg" alt="mastercard" />
      </div>
    </div>
    <form @submit.prevent="checkOut">
      <div class="form__group field">
        <input type="text" class="form__field" placeholder="Name" />
        <label for="name" class="form__label">Card Holder</label>
      </div>

      <div class="form__group field">
        <input
          class="form__field"
          type="tel"
          inputmode="numeric"
          maxlength="19"
          placeholder="Please enter valid 19 numbers"
        />
        <label for="cardNumber" class="form__label">Card Number</label>
      </div>

      <div class="form__group field">
        <input
          class="form__field"
          type="text"
          placeholder="City"
          v-model="city"
        />
        <label for="cardNumber" class="form__label">City</label>
      </div>

      <div class="form__group field">
        <input
          class="form__field"
          type="tel"
          inputmode="numeric"
          placeholder="Address"
          v-model="address"
        />
        <label for="cardNumber" class="form__label">Address</label>
      </div>

      <div class="form__group field date">
        <label for="expireDate" class="form__label">Expiry Date</label>
        <select name="expireMM" id="expireMM" class="form__field">
          <option value="">Month</option>
          <option value="01">January</option>
          <option value="02">February</option>
          <option value="03">March</option>
          <option value="04">April</option>
          <option value="05">May</option>
          <option value="06">June</option>
          <option value="07">July</option>
          <option value="08">August</option>
          <option value="09">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>
        <select name="expireYY" id="expireYY" class="form__field">
          <option value="">Year</option>
          <option value="20">2020</option>
          <option value="21">2021</option>
          <option value="22">2022</option>
          <option value="23">2023</option>
          <option value="24">2024</option>
        </select>
      </div>
      <div class="form__group field">
        <input
          placeholder="Name"
          class="form__field"
          type="numbers"
          name="expiry"
          id="expiry"
          maxlength="4"
        />
        <label for="ccc" class="form__label">CVV</label>
      </div>
      <p class="total">Total : {{ total }}L.E</p>
      <button type="submit">Check Out</button>
    </form>
  </div>
</template>

<script>
export default {
  data(){
    return {
      city: '',
      address: ''
    }
  },
  props: {
    total: Number,
  },
  methods:{
    checkOut(){
      const data = {
        locationName: this.city,
        locationAddres: this.address
      }
      this.$store.dispatch('checkOut', data)
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../sass/global.scss";

.cardDetails {
  min-width: 35rem;
  //height: 50rem;
  background-color: $primary-color;
  border-radius: 10px;
  padding: 3rem 2.5rem;

  @media only screen and (max-width: 500px) {
    order: 1;
  }

  h1 {
    color: white;
    font-weight: 600;
    font-size: 2.5rem;
  }
}

.cards {
  display: flex;
  flex-direction: column;
  margin-top: 1rem;

  h2 {
    font-weight: 500;
    color: white;
    margin-bottom: 1rem;
  }

  &--images {
    align-self: center;

    img {
      width: 10rem;
    }
  }
}

form {
  height: 80%;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;

  .form__group {
    position: relative;
    padding: 15px 0 0;
    width: 100%;
    margin-top: 1rem;
  }

  .form__field {
    font-family: inherit;
    width: 100%;
    border: 0;
    border-bottom: 2px solid white;
    outline: 0;
    font-size: 1.3rem;
    color: white;
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;

    &::placeholder {
      color: transparent;
    }

    &:placeholder-shown ~ .form__label {
      font-size: 1.7rem;
      cursor: text;
      top: 20px;
    }
  }

  .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 2rem;
    color: white;
  }

  .form__field:focus {
    ~ .form__label {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 2rem;
      color: $secondary-color;
      font-weight: 700;
    }
    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(to right, $secondary-color, $secondary-color);
    border-image-slice: 1;
  }
  /* reset input */
  .form__field {
    &:required,
    &:invalid {
      box-shadow: none;
    }
  }
}

.date {
  display: flex;
  justify-content: space-between;
  margin-top: 2.5rem;

  select {
    width: 40%;
    margin-top: 1rem;
  }
}

.total {
  color: white;
  margin-top: 2rem;
  font-size: 2.5rem;
}

button {
  background-color: $secondary-color;
  border: none;
  align-self: center;
  margin-top: 3rem;
  padding: 1rem 3rem;
  color: black;
  border-radius: 10px;
}
</style>