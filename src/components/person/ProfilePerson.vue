<template>
  <div class="card">
    <main-message></main-message>
    <form action="" class="form" @submit.prevent="onSubmit">
      <div class="form__info">
        <div class="form__info-img">
          <img src="@/assets/img/user-icon.jpg" alt="User icon" class="form__info-image">
        </div>
        <h2 class="form__title">{{name.email}}</h2>
      </div>
        <label class="form__label">Email
          <input class="form__input" type="email" v-model.trim="email" @blur="eBlur">
          <span class="invalid" v-if="eError">{{ eError }}</span>
        </label>
        <label class="form__label">Password
          <input name='password' class="form__input" type="text" v-model.trim="password" @blur="pBlur">
          <span class="invalid" v-if="pError">{{ pError }}</span>
        </label>
        <label class="form__label">BTC Address ( Optional )
          <input class="form__input" type="text" v-model.trim="addressBTC" @blur="btcBlur">
          <span class="invalid" v-if="btcError">{{ btcError }}</span>
        </label>
        <label class="form__label">ETH Address
          <input class="form__input" type="text" v-model.trim="addressETH" @blur="ethBlur">
          <span class="invalid" v-if="ethError">{{ ethError }}</span>
        </label>
        <main-button class="form__btn">Save</main-button>
        <div class="error" v-if="error">{{ error }}</div>
    </form>
  </div>
</template>

<script>
import { defineComponent, ref, computed } from 'vue';
import { useField, useForm } from 'vee-validate';
import * as yup from 'yup';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/store';
import MainButton from '@/components/UI/MainButton.vue';
import MainMessage from '@/components/UI/MainMessage.vue';
export default defineComponent({
  components: {
    MainButton,
    MainMessage
  },
  setup() {
    const store = useAuthStore();
    const error = ref(null);
    const router = useRouter();
    const MIN_LENGTH = 8;
    const name = computed(()=>JSON.parse(store.currentUser))
    const { handleSubmit } = useForm({
      validationSchema: yup.object({
        email: yup.string().trim().email(),
        password: yup.string().trim().min(MIN_LENGTH),
        addressBTC: yup.string().trim().matches(/^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$/, {
          message: 'Invalid BTC address'
        }),
        addressETH: yup.string().matches(/^0x[a-fA-F0-9]{40}$/),
      })
    });
    const { value: email, errorMessage: eError, handleBlur: eBlur } = useField('email');
    const { value: password, errorMessage: pError, handleBlur: pBlur } = useField('password');
    const { value: addressETH, errorMessage: ethError, handleBlur: ethBlur } = useField('addressETH');
    const { value: addressBTC, errorMessage: btcError, handleBlur: btcBlur } = useField('addressBTC');
    const onSubmit = handleSubmit(async (values) => {
      try{
        console.log(values);
        router.push('/person/profile');
      }catch(e){
        console.log('Error user', e.message);
      }
    })
    return {
      email,
      password,
      addressETH,
      addressBTC,
      onSubmit,
      error,
      eError,
      eBlur,
      pError,
      pBlur,
      ethError,
      ethBlur,
      btcError,
      btcBlur,
      name
    }
  }
})
</script>

<style lang="scss" scoped>
.card{
  max-width: 702px;
  width: 100%;
  margin: 0 auto;
  padding: 60px 27px 201px 36px;
  background: rgba(28, 28, 28, 0.6);
  border-radius: 16px;
  @media (max-width: 767px){
    padding: 30px 12px 100px 18px;
  }
}
.form{
  &__title{
    font-size: 25px;
    line-height: 30px;
    color: #DDDDDD;
  }
  &__info{
    display: flex;
    align-items: center;
    column-gap: 25px;
    margin-bottom: 28px;
    &-img{
      width: 78px;
      height: 78px;
      border-radius: 50%;
    }
    &-image{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &__input{
    min-width: 100%;
    height: 50px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    color: white;
    margin-top: 13px;
  }
  &__label{
    display: block;
    margin-bottom: 18px;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: rgba(255, 255, 255, 0.8);
  }
  &__btn{
    padding: 12px 29px;
    margin-top: 54px;
  }
}
</style>