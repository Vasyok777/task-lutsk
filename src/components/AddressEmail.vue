<template>
  <div class="send-email">
    <input 
      class="send-email__input" 
      type="email" 
      placeholder="Email Address" 
      v-model.trim="email"
      required
    >
    <img 
      class='send-email__img' 
      src="@/assets/img/vector/send-email.svg" 
      alt="Arrow right"
      @click="sendEmail"
    >
    <p class="invalid" v-if="eError">{{ eError }}</p>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { useField, useForm } from 'vee-validate';
import * as yup from 'yup';

export default defineComponent({
  setup(){
    const { handleSubmit } = useForm();
    const {value: email, errorMessage: eError} = useField('email', yup.string().trim().email());
    const sendEmail = handleSubmit((values) => {
      console.log(values);
      email.value = ''
    })
    return {
      email,
      eError,
      sendEmail
    }
  }
})
</script>

<style lang="scss" scoped>
.send-email{
  position: relative;
  max-width: 304px;
  height: 56px;
  &__input{
    width: 100%;
    height: 100%;
    padding: 16px 54px 16px 20px;
    color: white;
    box-shadow: inset 0px 0px 30px rgba(255, 255, 255, 0.05), inset 0px 2px 2px rgba(255, 255, 255, 0.15);
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
    border: none;
    border-radius: 10px;
    border-top: 1px solid rgb(24, 200, 255);
    border-left: 1px solid rgb(24,200,255);
    border-right: 1px solid rgb(147, 63, 254);
    border-bottom: 1px solid rgb(147, 63, 254);
    background: transparent;
    position: relative;
    margin-bottom: 5px;
    &::placeholder{
      font-weight: 400;
      font-size: 14px;
      line-height: 150%;
      color: #565976;
    }
  }
  &__img{
    position: absolute;
    right: 24px;
    bottom: 50%;
    width: 24px;
    height: 24px;
    transform: translateY(50%);
  }
}
</style>