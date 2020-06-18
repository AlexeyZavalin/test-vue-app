<template>
  <router-link :to="{name: 'category', params: {categorySlug: slug}}" class="categories__item category">
    <div class="category__img-wrapper">
        <img :src="img"  :alt="name"></div>
    <div class="category__name">{{ name }}</div>
    </router-link>
</template>

<script>
export default {
  name: 'category',
  props: {
    name: String,
    img: String,
    slug: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@red: red;
.category {
  background-color: #f2f2f2;
  display: block;
  border-bottom: none;
  padding: 20px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  transition: all 0.3s ease-in;
  box-shadow: 0 0 0 0 transparent;
  text-align: center;
  line-height: 1;
  margin-bottom: 15px;
  &:hover {
    background-color: @red;
    box-shadow: 0 15px 40px -5px fade(#000, 20%);
    .category__name {
      color: #fff;
    }
    img {
      filter: brightness(500%) contrast(100%);
    }
  }
  img {
    transition: .3s ease-out;
  }
  &__img-wrapper {
    margin-bottom: 15px;
  }
  &__name {
    color: #000;
    transition: .3s ease-in-out;
  }
}
</style>
