<template>
  <div>
    <div class="products">
      <div class="group" v-for="(products, index) in groups" :key="index">
        <Product v-for="product in products" :key="product.id" :product="product" />
      </div>
    </div>
    <div class="menu" v-if="menu.length">
      <div class="menu__item" v-for="(menuItem, index) in menu" :key="index">{{ menuItem.title }}</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import instance from "@/api.js";
import Product from "@/components/Product.vue";

export default {
  name: "category_products",
  components: {
    Product
  },
  data() {
    return {
      groups: [],
      menu: []
    };
  },
  beforeCreate() {
    let slug = this.$route.params.establishmentSlug;
    let menu = [];
    instance.get(`products/?establishment__slug=${slug}`).then(response => {
      let allProducts = response.data.results;
      for (let product of allProducts) {
        if (!menu.includes(product.menu)) {
          menu.push(product.menu);
        }
      }
      for (let menuItem of menu) {
        let group = allProducts.filter(item => item.menu === menuItem);
        this.groups.push(group);
      }
    });
  }
};
</script>

<style lang="less" scoped>
@red: red;

.products {
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fill, 260px);
}
</style>