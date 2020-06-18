<template>
  <div class="basket">
    <div class="cart cart_not-empty" v-if="items.length">
      <div class="cart__left"></div>
      <div class="cart__right">
        <div class="cart__total">{{ sum | price }}</div>
        <div class="cart__amount">{{ count | declention }}</div>
      </div>
      <div class="basket__list">
        <div class="basket__item basket-item" v-for="item in items" :key="item.id" :id="item.id">
          <img :src="item.img" :alt="item.title" class="basket-item__img" />
          <div class="basket-item__title">{{ item.title }}</div>
          <div class="basket-item__price">{{ item.price | price }}</div>
          <form v-on:submit.prevent="productRemove(item.id)" :key="item.id">
            <input
              type="number"
              min="1"
              :value="item.count"
              v-on:input="productAdd($event, item.id)"
              :key="item.id"
            />
            <button type="submit" class="basket-item__remove">Удалить</button>
          </form>
        </div>
      </div>
    </div>
    <div class="cart" v-else>
      <div class="cart__left"></div>
      <div class="cart__right">
        <div class="cart__total">
          Корзина
          <br />пуста
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "basket",
  computed: {
    items: function() {
      return this.$store.state.basket;
    },
    count: function() {
      return this.$store.getters.basketCount;
    },
    sum: function() {
      return this.$store.getters.totalSum;
    }
  },
  methods: {
    productAdd: function(event, itemId) {
      this.$store.commit("addToBasket", {
        id: itemId,
        count: event.target.value
      });
      this.$storage.set("basket", this.$store.state.basket);
    },
    productRemove: function(itemId) {
      this.$store.commit("removeFromBasket", itemId);
      this.$storage.set("basket", this.$store.state.basket);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@red: red;

.cart {
  height: 100%;
  padding: 20px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  background-color: #f3f3f3;
  display: flex;
  justify-content: space-between;
  border-bottom: none;
  line-height: 1;
  transition: 0.3s ease-in-out;
  box-shadow: 0 0 0 0 transparent;
  position: relative;
  z-index: 6;
  &__left {
    width: 40px;
    background-image: url(../assets/basket.png);
    background-repeat: no-repeat;
    background-position: right center;
    transition: 0.3s;
  }
  &__total {
    font-weight: bold;
    font-size: 1.14rem;
    color: #181818;
    margin-bottom: 8px;
  }
  &__amount {
    font-size: 0.86rem;
    font-weight: 300;
    color: #181818;
  }
  &:hover {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    .basket__list {
      visibility: visible;
      opacity: 1;
      transform: translateY(0);
    }
  }
}

.basket {
  &__list {
    visibility: hidden;
    opacity: 0;
    transform: translateY(-10px);
    position: absolute;
    z-index: 5;
    top: 100%;
    right: 0;
    background-color: #f3f3f3;
    padding: 15px;
    width: 600px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    box-shadow: -15px 15px 25px -5px fade(#000, 30%);
    transition: 0.4s;
  }
}

.basket-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  &__img {
    margin-right: 30px;
    width: 100px;
  }
  &__title {
    font-size: 1.25rem;
    margin-right: 30px;
    flex-grow: 1;
  }
  &__price {
    font-size: 1.5rem;
    margin-right: 30px;
  }
  input[type="number"] {
    width: 40px;
    margin-right: 15px;
  }
}
</style>
