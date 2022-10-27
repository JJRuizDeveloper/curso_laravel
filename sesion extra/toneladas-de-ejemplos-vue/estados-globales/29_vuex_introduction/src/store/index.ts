import { createStore } from 'vuex'

export default createStore({
  state: {
    // Data
    counter: 1
  },
  getters: {
    // Computed
    times2(state) {
      return state.counter *2
    }
  },
  mutations: {
    // Setter
    setCounter(state, value) {
      state.counter = value
    }
  },
})


/*

useStore()
this.$store <-- Options v1
mapState() <-- Options v2
mapGetters() <-- Options v2
mapMutations() <-- Options v2
mapActions() <-- Options v2

*/
