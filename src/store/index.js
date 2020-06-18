import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    basket: [],
    restaurant: null
  },
  getters: {
    basketCount(state) {
      return state.basket.length
    },
    restaurant(state) {
      return state.restaurant
    },
    totalSum(state) {
      let sum = 0
      for (let product of state.basket) {        
        sum += parseInt(product.price) * product.count
      }
      return sum
    }
  },
  mutations: {
    addToBasket(state, product) {
      let inBasket = state.basket.find(item => item.id === product.id)
      if (inBasket) {
        state.basket.find(item => item.id === product.id).count = product.count
      } else {
        state.basket.push(product)
      }
    },
    removeFromBasket(state, id) {
      let removeIndex = state.basket.map(function(item) { return item.id; }).indexOf(id);
      state.basket.splice(removeIndex, 1);
    }
  },
  actions: {
    
  },
  modules: {
  }
})
