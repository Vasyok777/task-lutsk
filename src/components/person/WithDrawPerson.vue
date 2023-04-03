<template>
  <main class="card">
    <main-select class="card__select"></main-select>
    <div class="card__widthdraw">
      <p :class="['card__widthdraw-text', check ? '' : 'check-text']">FAUCETPAY (LESS FEES)</p>
      <input type="checkbox" value="widthdraw" class="card__widthdraw-input" v-model="check">
      <p 
      :class="['card__widthdraw-text', {'check-text': check}]">DIRECT WITHDRAWAL</p>
    </div>
    <div class="card__address">
      <input type="text" class="card__address-input" placeholder="With drawal Address">
    </div>
    <div class="card__amount">
      <div class="card__amount-box">
        <label for="amount" class="card__amount-label">
          with drawal amount
        </label>
        <input class="card__amount-input" type="number" id="amount" value="0.02000000">
      </div>
      <div class="card__amount-btn">
        <button class="card__amount-custom">ADD</button>
        <button class="card__amount-custom">MIN</button>
      </div>
    </div>
    <div class="card__remainder">
      <p class="card__remainder-fee">Fee: 0.003 BTC</p>
      <p class="card__remainder-receive">you receive: 0.017 BTC</p>
    </div>
    <main-button class="card__btn">PLEACE WHITDRAWAL</main-button>
  </main>
</template>

<script>
import { defineComponent, ref } from 'vue';
import MainButton from '@/components/UI/MainButton.vue';
import MainSelect from '../UI/MainSelect.vue';

export default defineComponent({
  components: {
    MainButton,
    MainSelect,
  },
  setup() {
     const check = ref(true);

     return{
      check
     }
  }
})
</script>

<style lang="scss" scoped>
.card{
  padding: 96px 130px 94px;
  max-width: 911px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  background: rgba(28, 28, 28, 0.6);
  border-radius: 10px;
  @media (max-width: 1050px){
    padding: 50px;
  }
  @media (max-width: 767px){
    padding: 20px;
  }
  &__select{
    margin-bottom: 41px;
  }
  &__widthdraw{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    margin-bottom: 65px;
    @media (max-width: 550px){
      flex-direction: column;
    }
    &-text{
      font-size: 20px;
      line-height: 24px;
      text-transform: capitalize;
      color: rgba(255, 255, 255, 0.5);
      @media (max-width: 767px){
        font-size: 1rem;
      }
    }
    &-input{
      position: relative;
      width: 53px;
      height: 26px;
      -webkit-appearance: none;
      outline: none;
      background: white;
      border-radius: 12px;
      transition: .5s;
      &:checked{
        &:before{
          left: 30px;
        }
      }
      &:before{
        content: '';
        background: #000000;
        position: absolute;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        top: 3px;
        left: 4px;
        transition: .5s;
      }
    }
  }
  &__address{
    margin-bottom: 38px;
    &-input{
      width:100%;
      padding: 23px 26px;
      background: rgba(255, 255, 255, 0.05);
      color: white;
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 10px;
    }
  }
  &__amount{
    display: flex;
    justify-content: space-between;
    margin-bottom: 38px;
    @media (max-width: 850px){
      flex-direction: column;
      gap: 20px;
      align-items: center;
    }
    &-box{
      display: flex;
      flex-direction: column;
      gap: 4px;
      max-width: 425px;
      width: 100%;
      padding: 6px 13px 8px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 10px;
    }
    &-label{
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;
      text-transform: capitalize;
      color: rgba(255, 255, 255, 0.2);
      text-align: start;
    }
    &-input{
      background: transparent;
      border: none;
      color: white;
    }
    &-custom{
      background: rgba(255, 255, 255, 0.05);
      border-radius: 10px;
      padding: 20px;
      border: none;
      font-weight: 700;
      font-size: 23px;
      line-height: 28px;
      text-transform: capitalize;

      color: rgba(255, 255, 255, 0.5);
      & + .card__amount-custom{
        margin-left: 31px;
      }
    }
  }
  &__remainder{
    display: flex;
    justify-content: center;
    gap: 49px;
    margin-bottom: 53px;
    font-size: 20px;
    line-height: 24px;
    text-transform: capitalize;
    color: rgba(255, 255, 255, 0.5);
  }
  &__btn{
    font-size: 20px;
    padding: 20px 30px 16px;
    @media (max-width: 420px){
      font-size: 1rem;
      padding: 15px 15px;
    }
  }
}
.check-text{
  color: #FFFFFF;
}
</style>