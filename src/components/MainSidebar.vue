<template>
  <aside :class="['sidebar', {'active': active}]">
    <div class="sidebar__logo" @click="active = !active">
      <img src="@/assets/img/vector/logo-small.svg" alt="Logo img" class="sidebar__logo-img">
      <span class="sidebar__logo-name">Crypto</span>
    </div>
    <ul class="sidebar__list">
      <li class="sidebar__item" v-for="item in sidebar" :key="item.id">
        <router-link class="sidebar__link" :to="{name: item.to}">
          <img class="sidebar__link-img" :src="require(`@/assets/img/vector/${item.image}.svg`)" :alt="item.alt">
          <span class="sidebar__link-text">{{ item.title }}</span>
        </router-link>
      </li>
    </ul>
    <router-link class="sidebar__logout" to="#" @click="handleCkick">
      <img class="sidebar__logout-img" src="@/assets/img/vector/logout.svg" alt="Logout icon">
      <span class="sidebar__logout-text">Log out</span>
    </router-link>
  </aside>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { useAuthStore } from '@/store';
import { useRouter } from 'vue-router';

export default defineComponent({
  components: {
  },
  setup() {
    const store = useAuthStore();
    const router = useRouter();
    const active = ref(false);
    const sidebar = ref([
      {
        id: 1,
        title: 'Dashboard',
        image: 'dashboard',
        alt: 'dashboard icon',
        to: 'dashboard',
      },
      {
        id: 2,
        title: 'WithDraw',
        image: 'withdraw',
        alt: 'withdraw icon',
        to: 'withdraw',
      },
      {
        id: 3,
        title: 'Deposits',
        image: 'deposits',
        alt: 'deposits icon',
        to: 'deposits',
      },
      {
        id: 4,
        title: 'Buy Miner',
        image: 'shop',
        alt: 'shop icon',
        to: 'shop',
      },
      {
        id: 5,
        title: 'Settings',
        image: 'settings',
        alt: 'settings icon',
        to: 'settings',
      },
      {
        id: 6,
        title: 'Profile',
        image: 'user',
        alt: 'user icon',
        to: 'profile',
      },
    ]) 
    const handleCkick = () =>{
      store.logout()
      router.push('/')
    }
    return {
      sidebar,
      handleCkick,
      active
    }
  }
})
</script>

<style lang="scss" scoped>
.sidebar{
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 50px 0px 90px 50px;
  width: 283px;
  overflow: hidden;
  left: 0;
  top: 0;
  margin-right: 20px;
  position: fixed;
  z-index: 10;
  @media(max-width: 1400px){
    position: fixed;
    z-index: 11;
    background: darkblue;
    padding: 50px 20px 90px 10px;
    width: 80px;
    padding: 50px 10px;
    transition: all .3s ease-in-out;
    @media (max-width: 650px){
      width: 45px;
      padding: 30px 5px;
    }
    &.active{
      width: 420px;
      @media (max-width: 650px){
      width: 100%;
      }
      & .sidebar__logo{
        width: 150px;
        align-items: center;
        justify-content: start;
        margin-right: auto;
        &-img{
          width: 100%;
        }
      }
      & .sidebar__logo-name{
        display: block;
      }
      & .sidebar__link-text{
        display: block;
      }
      & .sidebar__link{
        justify-content: start;
      }
      & .sidebar__list{
        width: 100%;
      }
      & .sidebar__logout{
        width: 100%;
      }
      & .sidebar__logout{
        margin-left: 20px;
        justify-content: start;
      }
      & .sidebar__logout-text{
        display: block;
      }
    }
  }
  &__logo{
    display: flex;
    align-items: baseline;
    column-gap: 10px;
    margin-bottom: 39px;
    @media (max-width: 1440px){
      width: 65px;
      &-img{
        width: 100%;
      }
    }
    @media (max-width: 650px){
      width: 40px;
    }
    &-name{
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 29px;
      @media(max-width: 1440px){
        display: none;
      }
    }
  }
  &__item{
  }
  &__link{
    display: flex;
    align-items: center;
    column-gap: 19px;
    padding: 18px 25px;
    @media (max-width: 1400px){
      align-items: flex-start;
      justify-content: center;
    }
    @media (max-width: 650px){
      padding: 15px 10px;
    }
    &-text{
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;
      color: #DDDDDD;
      @media(max-width: 1400px){
        display: none;
        &.active{
          display: block;
        }
      }
    }
    &.router-link-active{
      background: linear-gradient(101.05deg, #1F8EBE -5.36%, #440495 29.46%, #440495 56.03%, #B102CD 81.92%);
      border-radius: 16px;
    }
  }
  &__logout{
    margin-top: auto;
    margin-left: 25px;
    display: flex;
    align-items: center;
    column-gap: 19px;
    @media (max-width: 1440px){
      margin-left: 0;
      justify-content: center;
    }
    &-text{
      @media (max-width: 1440px){
        display: none;
      }
    }
  }
}
</style>