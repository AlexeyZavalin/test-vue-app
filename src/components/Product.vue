<template>
  <div class="product">
    <div class="product__img-wrapper">
      <img :alt="product.title" class="product__img" :src="product.image" />
    </div>
    <div class="product__title">{{ product.title }}</div>
    <div class="product__ingredients">{{ product.ingredients }}</div>
    <div class="product__footer">
      <div class="product__price">{{ product.price | price }}</div>
      <button v-if="!inBasket" class="product__add" v-on:click="productAdd">В корзину</button>
      <form v-on:submit.prevent="productRemove" v-else>
        <input type="number" :value="count" v-on:input="productAdd" size="3" min="1" />
        <button class="product__remove" type="submit">Удалить</button>
      </form>
    </div>
    <div class="product__shop">
      <router-link
        :to="{name: 'establishment', params: {establishmentSlug: product.establishment.slug}}"
      >{{ product.establishment.name }}</router-link>
      <a href="#" class="active"></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "product",
  props: {
    product: Object
  },
  computed: {
    inBasket: function() {
      if (this.$store.state.basket.find(item => item.id === this.product.id)) {
        return true;
      }
      return false;
    },
    count: function() {
      if (this.inBasket) {
        return this.$store.state.basket.find(
          item => item.id === this.product.id
        ).count;
      }
    }
  },
  methods: {
    productAdd: function(event, count = 1) {
      if (event.type == "input") {
        count = event.target.value;
      }
      let product = this.product;
      this.$store.commit("addToBasket", {
        id: product.id,
        img: product.image,
        title: product.title,
        price: product.price,
        count: count
      })
      this.$storage.set("basket", this.$store.state.basket)
    },
    productRemove: function() {
      this.$store.commit("removeFromBasket", this.product.id)
      this.$storage.set("basket", this.$store.state.basket)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@red: red;

.product {
  width: 260px;
  padding: 30px;
  box-shadow: 0 0 0 0 transparent;
  transition: 0.2s ease-in;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  &:hover {
    box-shadow: 0 10px 20px -5px fade(#000, 8%);
    transform: translateY(-1px);
  }
  &__img-wrapper {
    display: block;
    border-bottom: none;
    width: 170px;
    height: 170px;
    margin: 0 auto 30px auto;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
  }
  &__img {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
  }
  &__title {
    font-size: 1rem;
    margin-bottom: 15px;
    line-height: 1.2;
    color: #0c0c0c;
    display: block;
    border-bottom: none;
  }
  &__ingredients {
    font-size: 0.75em;
    line-height: 1.1;
    color: #c9c9c9;
    margin-bottom: 20px;
  }
  &__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 25px;
    border-bottom: 1px solid #f3f3f3;
  }
  &__price {
    font-size: 1.25rem;
    font-weight: bold;
    color: #0c0c0c;
  }
  &__shop {
    padding-top: 20px;
    a {
      color: #cecece;
      border-bottom: none;
      &:visited {
        color: #cecece;
      }
    }
  }
}
</style>
