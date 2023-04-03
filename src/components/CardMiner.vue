<template>
  <div class="shop__card">
        <div class="shop__card-top">
          <img :src="require(`@/assets/img/miner/${img}.png`)" :alt="alt" class="shop__card-img">
          <h6 class="shop__card-title" :style="{background: color, '-webkit-background-clip': 'text'}">
            <span>{{title}}</span>
            <span class="shop__card-power">x{{ power.toFixed(1) }}</span></h6>
        </div>
        <p class="shop__card-text">{{ text }}</p>
        <router-link class="shop__card-link" to="#">
          <main-button class="shop__card-btn">Buy now</main-button>
        </router-link>
      </div>
</template>

<script>
import { defineComponent } from 'vue';
import MainButton from '@/components/UI/MainButton.vue';

export default defineComponent({
  components: { MainButton },
  props: {
    img:{
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: false,
      default: 'Miner icon',
    },
    title: {
      type: String,
      required: true
    },
    power: {
      type: Number,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    color: {
      type: String
    }
  },
  setup(){
  return {

  }
  }
})
</script>

<style lang="scss" scoped>
.shop{
  &__card{
    padding: 20px 9px 28px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    &-title{
      -webkit-text-fill-color: transparent;
      font-weight: 900;
      font-size: 18px;
      line-height: 22px;
    }
    &-img{
      width: 118px;
      height: 140px;
    }
    &-power{
      font-weight: 700;
      display: block;
      margin-top: 12px;
      font-size: 24px;
      line-height: 29px;
    }
    &-text{
      font-weight: 400;
      color: #898CA9;
      margin-bottom: 29px;
      margin-top: auto;
      text-align: initial;
      @media (max-width: 1100px){
      text-align: center;
      }
    }
    &-link{
      margin-top: auto;
    }
    &-top{
      display: flex;
      justify-content: center;
      gap: 20px;
      align-items: center;
      margin-bottom: 24px;
    }
    &-btn{
      padding: 7px 24px 6px 25px;
    }
  }
}
</style>