<template>
  <stripe-checkout
  ref="checkoutRef"
  mode= "payment"
  :pk="publishableKey"
  :line-items="lineItems"
  :success-url="successURL"
  :cancel-url="cancelURL"
  @loading="v => loading = v"
  />
  <button @click="submit">Checkout</button>
</template>

<script>
import { StripeCheckout } from '@vue-stripe/vue-stripe'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'HomeView',
  components: {
    StripeCheckout
  },
  data() {
    this.publishableKey = "pk_test_51LmHh1GzvNYE4Jx9cDtonS2TRqPB6F1C1GeDzBWkjPV34Ak927Zy9GqkSy6SlZNKKfeT0x9uLDZV8v5pcVZaiKFb00V8fsgAoy"
    return {
      loading: false,
      lineItems: [
        {
          price: 'price_1LmHn0GzvNYE4Jx9hzhUsgow',
          quantity: 1
        },
      ],
      successURL: 'http://localhost:8080/success',
      cancelURL: 'http://localhost:8080/error'
    }
  },
  methods: {
    submit() {this.$refs.checkoutRef.redirectToCheckout();}
  }
})
</script>

<style>

</style>