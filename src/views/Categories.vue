<template>
  <div class="block">
    <div class="block__title">Категории</div>
    <div class="categories">
      <Category 
      v-for="category in categories" 
      :key="category.id"
      :name="category.title"  
      :slug="category.slug" 
      :img="category.image" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Category from '@/components/Category.vue'
import instance from '@/api.js'

export default {
  name: 'categories',
  components: {
    Category
  },
  data() {
      return {
        categories: []
      }
  },
  beforeCreate() {
      instance.get('categories/')
                .then(response => this.categories = response.data.results)
  }
}
</script>


<style lang="less" scoped>
.categories {
  margin-left: -15px;
  margin-right: -15px;
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fill, 165px);
}
</style>
