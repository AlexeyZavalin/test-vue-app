<template>
  <div class="loading" v-bind:class="visible ? 'loading_visible': 'loading_invisible'">
    <img src="../assets/loading.gif" alt />
  </div>
</template>

<script>
export default {
  props: {
    visible: Boolean
  },
  data: () => ({})
};
</script>

<style scope lang="less">
.loading {
  position: fixed;
  z-index: 9999;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  &_visible {
    visibility: visible;
    opacity: 1;
  }
  &_invisible {
    opacity: 0;
    visibility: hidden;
    transition: 0.5s;
  }
  img {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }
}
</style>