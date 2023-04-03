<template>
  <header class="header">
    <div class="container">
      <div class="header__top">
        <nav class="navbar">
          <ul :class="['navbar__list', {'navbar__list-active': isMenuOpen}]">
            <li 
              class="navbar__item"
              v-for="item in navbar" 
              :key="item"
            >
            <router-link class="navbar__link" to="#">
              {{ item }}
            </router-link>
            </li>
          </ul>
        </nav>
        <div class="header__top-auth btn-header">
          <router-link :to="{name: 'login'}">
            <main-button class="btn-header__login">Sign in</main-button>
          </router-link>
          <router-link :to="{name: 'register'}">
            <main-button class="btn-header__register">Sign up</main-button>
          </router-link>
        </div>
        <div 
          :class="['burger-menu', 
                  {'burger-menu__active': isMenuOpen}]" 
          @click="setOpen"
        >
          <span></span>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { defineComponent, ref } from 'vue';
import MainButton from '@/components/UI/MainButton.vue';
export default defineComponent({
  setup(){
    const navbar = ref(['Buy / Sell', 'Grow', 'Markets', 'Business', 'Support']);
    const isMenuOpen = ref(false);
    const setOpen = () =>{
      isMenuOpen.value = !isMenuOpen.value;
      document.body.classList.toggle('lock');
    }
    return {
      navbar,
      isMenuOpen,
      setOpen
    }
  },
  components: {
    MainButton
  }
})
</script>

<style lang="scss">
.header{
  padding: 1.25rem 0;
  position: relative;
  z-index: 2;
  &__top{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: auto;
    max-width: 790px;
    &-auth{
      display: flex;
      column-gap: 0.75rem;
    }
  }
}
.btn-header{
  &__login{
    border: 1px solid white;
    padding: 12px 21px;
    background: transparent;
  }
  &__register{
    padding: 12px 18px;
  }
}
.navbar{
  &__list{
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all .3s ease 0s;
    @media (max-width: 767px){
      position: fixed;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(225deg, #18C8FF 14.89%, #933FFE 85.85%);
      flex-direction: column;
      justify-content: flex-start;
      padding-top: 100px;
      &.navbar__list-active{
        left: 0;
      }
    }
  }
  &__item + .navbar__item{
    margin-left: 2rem;
    @media (max-width: 767px){
      margin-top: 20px;
      margin-left: 0rem;
    }
  }
  &__link{
    font-size: 0.875rem;
    @media (max-width: 767px){
      font-size: 2rem;
    }
  }
}
.burger-menu{
  display: none;
  @media (max-width: 767px){
    display: block;
    position: relative;
    width: 30px;
    height: 20px;
    &.burger-menu__active:before{
      transform: rotate(45deg);
      top: 9px;
    }
    &.burger-menu__active:after{
      transform: rotate(-45deg);
      bottom: 9px;
    }
    &.burger-menu__active span{
      transform: scale(0)
    }
    & span{
      position: absolute;
      background: white;
      left: 0;
      width: 100%;
      height: 2px;
      top: 9px;
      transition: all .3s ease 0s;
    }
    &:before,
    &:after{
      content: '';
      position: absolute;
      height: 2px;
      width: 100%;
      left: 0;
      background: white;
      transition: all .3s ease 0s;
    };
    &:before{
      top: 0;
    }
    &:after{
      bottom: 0;
    }

  }
}
body.lock{
  overflow: hidden;
}
</style>