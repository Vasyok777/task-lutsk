<template>
  <div class="card">
    <main-select></main-select>
    <div class="card__qrcode">
      <img src="@/assets/img/code.jpg" alt="qr code icon" class="card__qrcode-image">
    </div>
    <div class="card__deposite">
      <div class="card__deposite-box">
        <h6 class="card__deposite-title">deposit address (bTC)</h6>
        <input 
          type="text" :placeholder="text" 
          class="card__deposite-address"
          readonly>
      </div>
      <img src="@/assets/img/vector/copy.svg" alt="Copy svg" class="card__deposite-copy" @click="copy">
    </div>
    <p class="card__text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temposLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo
    </p>
    <main-button class="card__btn">PLEACE WHITDRAWAL</main-button>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import MainSelect from '../UI/MainSelect.vue';
import MainButton from '@/components/UI/MainButton.vue';
import { useAlertStore } from '@/store/alert';

export default defineComponent({
  components: {
    MainButton,
    MainSelect,
  },
  setup() {
    const store = useAlertStore();
    const text ='283h976qwe9ry25r817gf31f4fk17f9g '
    const copy = () =>{
      try{
        navigator.clipboard.writeText(text)
        store.setMessage({
          value: 'Copied successfully',
          type: 'primary'
        })
      }catch(e){
        console.log(e);
      }
    }
    return {
      copy,
      text
    }
  }
})
</script>

<style lang="scss" scoped>
.card{
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  padding: 60px 74px 66px 75px;
  background: rgba(28, 28, 28, 0.6);
  border-radius: 10px;
  @media (max-width: 800px){
    padding: 30px;
  }
  @media (max-width: 420px){
    padding: 10px;
  }
  &__selector{
    width: 100%;
    padding: 19px 20px;
    margin-bottom: 56px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
    color: #FFFFFF;
  }
  &__qrcode{
    width: 232px;
    height: 232px;
    margin: 50px auto;
    &-image{
      border-radius: 10px;
      max-width: 100%;
      max-height: 100%;
      object-fit: cover;
    }
  }
  &__deposite{
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 5px 26px 9px 17px;
    border-radius: 10px;
    margin-bottom: 30px;
    position: relative;
    &-box{
      text-align: left;
    }
    &-title{
      margin-bottom: 4px;
      font-weight: 500;
      font-size: 15px;
      line-height: 18px;
      text-transform: capitalize;
      color: rgba(255, 255, 255, 0.2);
    }
    &-address{
      font-weight: 500;
      font-size: 25px;
      line-height: 1.3;
      text-transform: capitalize;
      color: rgba(255, 255, 255, 0.8);
      background: transparent;
      width: 100%;
      padding-right: 40px;
      border: none;
      &::placeholder{
        color: white;
      }
      @media (max-width: 767px){
        font-size: 1rem;
      }
    }
    &-copy{
      content: '';
      position: absolute;
      right: 26px;
      top: 22px;
    }
  }
  &__text{
    max-width: 476px;
    width: 100%;
    margin: 0 auto;
    font-weight: 400;
    line-height: 1.5;
    color: #898CA9;
    margin-bottom: 45px;
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
</style>