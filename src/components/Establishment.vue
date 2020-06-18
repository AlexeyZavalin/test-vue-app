<template>
  <router-link class="restaurant" :to="{name: 'establishment', params: {establishmentSlug: establishment.slug}}">
    <div class="restaurant__img-wrapper">
      <img :src="establishment.logo" :alt="establishment.title" />
    </div>
    <div class="restaurant__title">{{ establishment.title }}</div>
    <div class="restaurant__info info">
      <div class="info__row">
        <div class="info__rating">н. о.</div>
        <div class="info__kitchens kitchens">Фастфуд</div>
      </div>
      <div class="info__row">
        <div class="info__delivery">0</div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "establishment",
  props: {
    establishment: Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@red: red;

.restaurant {
  display: block;
  max-width: 360px;
  margin-bottom: 35px;
  box-shadow: 0 0 0 0 transparent;
  transition: 0.2s ease-out;
  border-bottom: none;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  &:hover {
    box-shadow: 0 20px 30px -5px fade(#000, 5%);
    transform: translateY(-2px);
  }
  &__img-wrapper {
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }
  &__title {
    color: #0c0c0c;
    font-weight: 600;
    padding: 15px 0;
    line-height: 1;
  }
}

.info {
  &__row {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
  }
  &__rating {
    min-width: 70px;
    height: 27px;
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    border-radius: 15px;
    font-weight: bold;
    color: #fff;
    font-size: 1rem;
    padding: 0 30px 0 9px;
    line-height: 27px;
    margin-right: 10px;
    background-color: @red;
    position: relative;
    background-image: url(../assets/stars.png);
    background-repeat: no-repeat;
    background-position: 45px 7px;
  }
  &__kitchens {
    color: #ababab;
    font-size: 0.85rem;
  }
  &__delivery {
    color: #191919;
    font-size: 0.85rem;
    display: inline-block;
    padding: 6px 50px 6px 0;
    position: relative;
    &:after {
      content: "";
      position: absolute;
      right: 0;
      top: 0;
      height: 21px;
      width: 31px;
      background-image: url(../assets/delivery.png);
    }
  }
}
</style>
