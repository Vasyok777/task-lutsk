<template>
  <div class="shop">
    <div class="shop__box">
      <card-miner
        v-for="miner in miners"
        :key="miner.id"
        :id="miner.id"
        :img="miner.img"
        :alt="miner.alt"
        :title="miner.title"
        :power="miner.power"
        :text="miner.text"
        :color="miner.color"
      ></card-miner>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import CardMiner from '@/components/CardMiner.vue';
export default defineComponent({
  components: { CardMiner },
  setup() {
    const miners = ref([
      {
        id: 1,
        img: 'bronze',
        alt: 'Bronze miner icon',
        title: 'Bronze',
        power: 0.5,
        color: 'linear-gradient(180deg, #FFA217 0%, rgba(255, 162, 23, 0) 100%)',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos',
      },
      {
        id: 2,
        img: 'sliver',
        alt: 'Sliver miner icon',
        title: 'Sliver',
        power: 1.0,
        color: 'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos',
      },
      {
        id: 3,
        img: 'gold',
        alt: 'Gold miner icon',
        title: 'Gold',
        power: 3.0,
        color: 'linear-gradient(180deg, #FFF500 0%, rgba(255, 245, 0, 0) 100%)',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos',
      },
      {
        id: 4,
        img: 'platinum',
        alt: 'Platinum miner icon',
        title: 'Platinum',
        power: 12,
        color: 'linear-gradient(180deg, #0085FF 0%, rgba(0, 133, 255, 0) 100%)',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos',
      },
      {
        id: 5,
        img: 'daimond',
        alt: 'Daimond miner icon',
        title: 'Daimond',
        power: 38,
        color: 'linear-gradient(180deg, #FA00FF 0%, rgba(250, 0, 255, 0) 100%)',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos',
      },
      {
        id: 6,
        img: 'legendary',
        alt: 'Legendary miner icon',
        title: 'Legendary',
        power: 86,
        color: 'linear-gradient(180deg, #FF0000 0%, rgba(255, 0, 0, 0) 100%)',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos',
      },
    ])
    return {
      miners,
    }
  }
})
</script>

<style lang="scss" scoped>
.shop{
  padding: 44px 63px 39px;
  background: rgba(28, 28, 28, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  max-width: 946px;
  margin: 0 auto;
  @media (max-width: 1100px){
    padding: 30px;
  }
  &__box{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    text-align: center;
    @media (max-width: 1100px){
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 720px){
      grid-template-columns: 1fr;
    }
  }
}
</style>