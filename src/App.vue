<template>
  <div id="app">
    <div class="wrapper">
      <preloader v-bind:visible="loading"></preloader>
      <Header />
      <main class="content">
        <div class="container">
          <div class="content">
            <transition name="slide-fade">
              <router-view />
            </transition>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Preloader from "@/components/Preloader.vue";
import instance from "@/api.js";

export default {
  components: {
    Header,
    Footer,
    Preloader
  },
  data() {
    return {
      loading: false
    };
  },
  beforeCreate() {
    let basket = this.$storage.get('basket', null)
    if (basket) {
      this.$store.state.basket = basket
    }
  },
  created() {
    this.loading = true;
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  },
  watch: {
    $route(to, from) {}
  }
};
</script>

<style lang="less">
.container {
  padding-left: 0;
  padding-right: 0;
}
.content {
  position: relative;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  width: 100%;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
