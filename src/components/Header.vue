<template>
  <header class="header">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-2 col-sm-3 col-5 order-0">
          <router-link :to="{ name: 'home' }" title="На главную" class="logo">
            <img src="../assets/logo.png" alt="Логотип Neru Eda" />
          </router-link>
        </div>
        <div class="col-xl-2 col-lg-1 col-sm-2 col-3 order-sm-2 order-2 order-md-1">
          <a href="/promos" class="promos">Акции</a>
        </div>
        <div class="col-lg-6 col-md-7 col-sm-9 col-9 order-sm-1 order-3">
          <div class="header__top">
            <!-- <button class="btn" v-on:click="vkAuth">Войти через ВК</button> -->
            <button class="btn btn_primary">Перезвоните мне</button>
            <a class="phone callibri_phone" title="Позвонить" href="tel:8999">{{ phone }}</a>
          </div>
          <nav class="nav">
            <ul class="menu">
              <li>
                <router-link :to="{name: 'establishments'}">Кафе и рестораны</router-link>
              </li>
              <li>
                <router-link to>Рекомендуем</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'about' }">О компании</router-link>
              </li>
              <li>
                <router-link to>Контакты</router-link>
              </li>
            </ul>
          </nav>
        </div>
        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-5 col-7 order-1">
          <Basket/>
        </div>
      </div>
    </div>
    <div class="hamburger hamburger--spring d-block d-lg-none">
      <div class="hamburger-box">
        <div class="hamburger-inner"></div>
      </div>
    </div>
  </header>
</template>

<script>
import Basket from '@/components/Basket.vue'
import * as authSettings from '@/auth_settings.js'
import axios from 'axios'

export default {
  name: "Header",
  components: {
    Basket
  },
  data() {
    return {
      phone: "+7 (924) 562-23-33"
    };
  },
  methods: {
    vkAuth: function(event) {
      axios.get('https://oauth.vk.com/authorize', {
        'client_id': authSettings.vkAppId,
        'scope': 'notify',
        'redirect_uri': 'https://oauth.vk.com/blank.html',
        'display': 'popup',
        'v': '5.103',
        'response_type': 'token'
      }).then(data => console.log(data))
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@red: red;
.header {
  margin-bottom: 30px;
  padding-top: 60px;
  position: relative;
  z-index: 999;
  @media (min-width: 992px) {
    padding-top: 30px;
  }
  &__top {
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    margin-bottom: 14px;
  }
  .nav {
    background-color: #fff;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateX(-100%);
    transition: 0.3s ease-in;
    @media (min-width: 992px) {
      display: block;
      position: static;
      transform: translate(0);
    }
    &_active {
      transform: translate(0);
      .menu {
        list-style: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        li {
          margin: 0;
          padding: 0;
          width: 100%;
        }
        a {
          font-size: 1.5rem;
          font-weight: 600;
          padding: 15px;
          width: 100%;
          display: block;
          border-bottom: none;
          color: #0c0c0c;
          text-align: center;
          &:hover,
          &.active {
            background-color: @red;
            color: #fff;
          }
        }
      }
    }
    > .menu {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;
      li {
        position: relative;
        margin: 0;
        padding: 0;
        @media (min-width: 992px) {
          &:not(:last-child) {
            margin-right: 50px;
          }
        }
        &:hover {
          .menu {
            @media (min-width: 992px) {
              opacity: 1;
              visibility: visible;
            }
          }
        }
        .menu {
          min-width: 100%;
          max-width: 240px;
          @media (min-width: 992px) {
            box-shadow: 0 15px 25px -5px fade(#000, 15%);
            position: absolute;
            top: 100%;
            left: 0;
            z-index: 100;
            opacity: 0;
            visibility: hidden;
          }
          li {
            margin-right: 0;
          }
          transition: 0.2s;
          background-color: #fff;
          a {
            padding: 10px 15px;
          }
        }
      }
      .menu {
        list-style: none;
        margin: 0;
        padding: 0;
      }
      a {
        color: #0c0c0c;
        position: relative;
        display: block;
        padding-bottom: 10px;
        border-bottom: none;
        &:after {
          content: "";
          display: block;
          position: absolute;
          top: 100%;
          right: 0;
          width: 0;
          height: 2px;
          background-color: @red;
          transition: 0.3s cubic-bezier(0.38, 0, 1, 1);
        }
        &:hover,
        &.active {
          &:after {
            width: 100%;
            left: 0;
            right: auto;
          }
        }
      }
    }
  }
}

.logo {
  border-bottom: none;
}

.promos {
  font-size: 14px;
  border-bottom: none;
  color: #0c0c0c;
  display: block;
  padding-top: 45px;
  background-image: url(../assets/discount.png);
  background-position: top center;
  background-repeat: no-repeat;
  -webkit-background-size: 28px;
  background-size: 28px;
  line-height: 1;
  text-align: center;
  transition: 0.2s;
  &:visited {
    color: #0c0c0c;
  }
  &:hover {
    color: @red;
  }
}

.phone {
  margin-left: 35px;
  font-size: 1.25rem;
  font-weight: 600;
  color: #0c0c0c;
  border-bottom: none;
  transition: 0.2s;
}

.hamburger-inner {
  background-color: @red;
  &:after,
  &:before {
    background-color: @red;
  }
}

.hamburger {
  position: absolute;
  top: 0;
  right: 10px;
  background-color: #fff;
  z-index: 1000;
  &:hover {
    opacity: 1;
  }
  &.is-active {
    opacity: 1;
    z-index: 10000;
    position: fixed;
    top: 0;
    .hamburger-inner {
      background-color: @red;
      &:after,
      &:before {
        background-color: @red;
      }
    }
  }
}

.hamburger.is-active:hover,
.hamburger:hover {
  opacity: 1;
}
</style>
