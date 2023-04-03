<template>
  <div class="wrapper">
    <main-sidebar></main-sidebar>
    <main class="main">
      <main-message></main-message>
      <div class="user__info">
        <p class="user__info-name">{{name.email}}</p>
        <img class="user__info-img" src="@/assets/img/user-icon.jpg" alt="user ava">
      </div>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue';
import MainSidebar from '@/components/MainSidebar.vue';
import { useAuthStore } from '@/store';
import MainMessage from '@/components/UI/MainMessage.vue';
export default defineComponent({
  components: {
    MainSidebar,
    MainMessage
  },
  setup() {
    const store = useAuthStore();
    const name = computed(()=>JSON.parse(store.currentUser))
    return {
      name,
    }
  }
})
</script>

<style lang="scss" scoped>
.wrapper{
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  position: relative;
  &:after{
    content: '';
    position: absolute;
    width: 1000px;
    height: 600px;
    left: 0;
    top: 0;
    background-image: url('@/assets/img/pesron-decor.png');
    background-repeat: no-repeat;
    @media (max-width: 1020px){
      width: 100%;
    }
  }
}
.main{
  display: flex;
  flex: 1 1 0;
  flex-direction: column;
  padding-top: 50px;
  padding-right: 50px;
  background-image: url('@/assets/img/person-dec.png');
  background-repeat: no-repeat;
  background-position: right 0;
  position: relative;
  z-index: 10;
  margin-left: 300px;
  @media (max-width: 1400px){
    margin-left: 0;
    padding-left: 90px;
  }
  @media (max-width: 1020px){
    padding-right: 20px;
  }
  @media (max-width: 650px){
    margin-left: 50px;
    padding-top: 20px;
    padding-left: 0;
  }
} 
.user__info{
  display: flex;
  align-items: center;
  column-gap: 1.5rem;
  align-self: end;
  margin-bottom: 39px;
  &-name{
    font-weight: 500;
    font-size: 1.125rem;
    line-height: 1.22;
    color: #DDDDDD;
  }
  &-img{
    width: 3rem;
    height: 3rem;
    object-fit: cover;
    border-radius: 50%;
  }
}
</style>