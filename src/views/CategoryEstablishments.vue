<template>
    <div class="establishments">
      <Establishment 
      v-for="establishment in establishments" 
      :key="establishment.id"
      :establishment="establishment"
      :name="establishment.name"  
      :slug="establishment.slug" 
      :img="establishment.logo" />
    </div>
</template>

<script>
// @ is an alias to /src
import Establishment from '@/components/Establishment.vue'
import instance from '@/api.js'

export default {
  name: 'category_establishments',
  components: {
    Establishment
  },
  data() {
      return {
        establishments: []
      }
  },
  beforeCreate() {
      let slug = this.$route.params.categorySlug
      instance.get(`establishments/?category__slug=${slug}`)
                .then(response => this.establishments = response.data.results)
  }
}
</script>

<style lang="less" scoped>
.establishments {
  margin-right: -15px;
  margin-left: -15px;
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fill, 360px);
}
</style>
