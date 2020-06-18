<template>
  <div class="home">
    <Categories />
    <PopularEstablishments />
  </div>
</template>

<script>
// @ is an alias to /src
import Categories from '@/views/Categories.vue'
import PopularEstablishments from '@/views/PopularEstablishments.vue'

export default {
  name: 'home',
  components: {
    Categories,
    PopularEstablishments
  }
}
</script>
