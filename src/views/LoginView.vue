<template>
  <main class="user-auth">
    <div class="container">
      <main-message></main-message>
      <div class="user-auth__form">
        <form class="form" @submit.prevent="onSubmit">
          <main-logo></main-logo>
            <label class="form__label">Email
              <input class="form__input" id="email" type="email" v-model="email" @blur="eBlur">
              <span class="invalid" v-if="eError">{{ eError }}</span>
            </label>
            <label class="form__label">Password
              <input class="form__input" id="password" type="password" v-model.trim="password" @blur="pBlur">
              <span class="invalid" v-if="pError">{{ pError }}</span>
            </label>
            <div class="form__question">
              <label class="form__question-remember">
                <input class="form__question-input real-checkbox" id="rememberMe" type="checkbox" v-model.trim="rememberMe">
                <span class="custom-checkbox"></span>
                Save Email and Password
              </label>
              <router-link :to="{ name: 'register' }">Don’t have an account?</router-link>
            </div>
            <main-button class="form__btn">Sign in</main-button>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
import { defineComponent } from 'vue';
import MainLogo from '@/components/MainLogo';
import MainButton from '@/components/UI/MainButton.vue';
import MainMessage from '@/components/UI/MainMessage.vue';
import { useLoginForm }from '@/use/login-form';
import { useAuthStore } from '@/store';
import { useRouter } from 'vue-router';

export default defineComponent({
  components: {
    MainLogo,
    MainButton,
    MainMessage,
  },
  setup(){
  const store = useAuthStore();
  const router = useRouter();
    const submit = async values=>{
    try{
      await store.login(values)
      router.push('/person/dashboard');
    }catch(e){
      console.log(e);
    }
  }
    return {
      ...useLoginForm(submit)
    }
  }
})
</script>

<style lang="scss" scoped>
.invalid{
  color: red;
}
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
  &__question{
    display: flex;
    justify-content: space-between;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: #898CA9;
    @media (max-width: 767px){
      margin-bottom: 20px;
    }
    @media (max-width: 420px){
      flex-direction: column;
      row-gap: 10px;
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
.custom-checkbox{
  margin-right: 17px;
  display: inline-block;
  width: 15px;
  height: 15px;
  background: #16161E;
  border-radius: 5px;
  position: relative;
  &::before{
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: all .2s ease-in;
    display: inline-block;
    width: 10px;
    height: 10px;
    background-image: url('@/assets/img/vector/checked.svg');
  }
}
.real-checkbox:checked + .custom-checkbox::before{
  transform: translate(-50%, -50%) scale(1);
}
.real-checkbox{
  width: 0;
  height: 0;
  position: absolute;
}
.logo{
  margin-bottom: 46px;
  @media (max-width: 767px){
    margin-bottom: 30px;
  }
}
</style>

<style lang="scss">

</style>