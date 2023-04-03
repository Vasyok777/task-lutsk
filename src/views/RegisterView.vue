<template>
  <main class="user-auth">
    <div class="container">
      <main-message></main-message>
      <div class="user-auth__form">
        <form class="form" @submit.prevent="onSubmit">
          <main-logo class="logo"></main-logo>
          <label class="form__label">Email
            <input class="form__input" type="email" v-model.trim="email" @blur="eBlur">
            <span class="invalid" v-if="eError">{{ eError }}</span>
          </label>
          <label class="form__label">Password
            <input name='password' class="form__input" type="password" v-model.trim="password" @blur="pBlur">
            <span class="invalid" v-if="pError">{{ pError }}</span>
          </label>
          <label class="form__label">Confirm Password
            <input class="form__input" type="password" v-model.trim="confirmPassword" @blur="cBlur">
            <span class="invalid" v-if="cError">{{ cError }}</span>
          </label>
          <label class="form__label">BTC Address ( Optional )
            <input class="form__input" type="text" v-model.trim="addressBTC" @blur="btcBlur">
            <span class="invalid" v-if="btcError">{{ btcError }}</span>
          </label>
          <main-button class="form__btn">Sign up</main-button>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
import { defineComponent } from 'vue';
import { useField, useForm } from 'vee-validate';
import { useAuthStore } from '@/store';
import { useRequestStore } from '@/store/request';
import { useRouter } from 'vue-router';
import {validate} from '@/utils/validate';
import MainLogo from '@/components/MainLogo.vue';
import MainButton from '@/components/UI/MainButton.vue';
import MainMessage from '@/components/UI/MainMessage.vue';

export default defineComponent({
  components: {
    MainLogo,
    MainButton,
    MainMessage,
  },
  setup(){
    const requestStore = useRequestStore();
    const store = useAuthStore();
    const router = useRouter();
    const { handleSubmit } = useForm(validate);
    const { value: email, errorMessage: eError, handleBlur: eBlur } = useField('email');
    const { value: password, errorMessage: pError, handleBlur: pBlur } = useField('password');
    const { value: confirmPassword, errorMessage: cError, handleBlur: cBlur } = useField('confirmPassword');
    const { value: addressBTC, errorMessage: btcError, handleBlur: btcBlur } = useField('addressBTC');

    const onSubmit = handleSubmit(async (values) => {
      try{
        await store.register(values)
        await requestStore.create(values)
        router.push('/person/dashboard');
      }catch(e){
        console.log('Error user', e.message);
      }
    })
    return {
      email,
      password,
      confirmPassword,
      addressBTC,
      onSubmit,
      eError,
      eBlur,
      pError,
      pBlur,
      cError,
      cBlur,
      btcError,
      btcBlur,
    }
  }
})
</script>

<style lang="scss" scoped>
.form{
  width: 578px;
  &__input{
    min-width: 100%;
    height: 50px;
    background: #16161E;
    border-radius: 10px;
    border: 1px solid #16161e;
    color: white;
    margin-top: 10px;
    padding: 0px 10px;
    @media (max-width: 767px){
      height: 40px;
    }
  }
  &__label{
    display: block;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 1.125rem;
    line-height: 1.22;
    margin-bottom: 20px;
    @media (max-width: 767px){
      font-size: 0.8rem;
    }
  }
  &__btn{
    margin-top: 30px;
    padding: 12px 18px;
    @media (max-width: 767px){
      margin-top: 0px;
    }
  }
}
.logo{
  margin-bottom: 46px;
  @media (max-width: 767px){
    margin-bottom: 30px;
  }
}
</style>