<template>
  <div>
    <main-header></main-header>
    <main class="main">
      <section class="promo">
        <div class="container">
          <div class="promo__content">
            <h1 class="promo__content-title">We make crypto clear and simple</h1>
            <main-button>Get Started</main-button>
          </div>
        </div>
      </section>
      <section class="steps">
        <div class="container">
          <div class="steps__row">
            <div class="steps__card" v-for="step in steps" :key="step.id">
              <img :src="require(`@/assets/img/vector/${step.img}.svg`)" alt="Icon steps" class="steps__card-img">
              <h4 class="steps__card-title">{{ step.title }}</h4>
              <p class="steps__card-text">{{ step.text }}</p>
              <a class="steps__card-link" :href="step.link">{{ step.linkText }}
                <img src="@/assets/img/vector/arrow-rigth.svg" alt="Arrow right" class="steps__card-link-img">
              </a>
            </div>
          </div>
        </div>
      </section>
      <section class="mining">
        <div class="container">
          <div class="mining__box">
            <h2 class="mining__box-title title">A cryto mining platform that invest in you</h2>
            <p class="mining__box-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor</p>
            <main-button>Get Started</main-button>
          </div>
        </div>
      </section>
      <section class="service">
        <div class="container">
          <div class="service__row">
            <div class="service__img">
              <img src="@/assets/img/user-support.png" alt="User icon" class="service__imgages">
            </div>
            <div class="service__info">
              <h2 class="service__info-title title">24/7 access to full service customer support</h2>
              <p class="service__info-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sit amet, consectetur</p>
              <main-button class="service__info-btn">Get started</main-button>
            </div>
          </div>
        </div>
      </section>
      <section class="secure">
        <div class="container">
          <div class="secure__box">
            <div class="secure__box-info">
              <h2 class="secure__box-title title">Take your first step into safe, secure crypto investing</h2>
              <p class="secure__box-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos</p>
              <main-button>Get Started</main-button>
            </div>
            <div class="secure__box-img">
              <img src="@/assets/img/secure-bg.png" alt="Secure icon" class="secure__box-image">
            </div>
          </div>
        </div>
      </section>
      <section class="receive">
        <div class="container">
          <div class="receive__box">
            <h2 class="receive__box-title title">Receive transmissions</h2>
            <p class="receive__box-text">Unsubscribe at any time. <span>Privacy policy↗</span></p>
            <address-email class="receive__box-input"></address-email>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import MainHeader from '@/components/MainHeader.vue';
import MainButton from '@/components/UI/MainButton.vue';
import AddressEmail from '@/components/AddressEmail.vue';

export default defineComponent({
  components: { MainHeader, MainButton, AddressEmail },
  setup(){
    
   const steps = ref([
      {
        id: 1,
        img: 'create',
        title: 'Create',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor',
        linkText: 'Get Started',
        link: '#',
      },
      {
        id: 2,
        img: 'login',
        title: 'Login',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor',
        linkText: 'Get Started',
        link: '#',
      },
      {
        id: 3,
        img: 'manage',
        title: 'Manage',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor',
        linkText: 'Get Started',
        link: '#',
      },
    ])
    return {
      steps
    }
  }
});
</script>

<style lang="scss" scoped>
.main{
  transform: translateY(-130px);
}
.promo{
  padding: 281px 10px 321px;
  position: relative;
  background-image: url('@/assets/img/promo-left-decor.png'),
                    url('@/assets/img/promo-right-decor.png');
  background-repeat: no-repeat;
  background-position: 0% 15%, right;
  @media (max-width: 500px){
    background-image: url('@/assets/img/promo-left-decor.png');
  }
  &__content{
    max-width: 780px;
    width: 100%;
    margin: 0 auto;
    text-align: center;
    &-title{
      font-weight: 900;
      font-size: 85px;
      line-height: 130%;
      text-align: center;
      margin-bottom: 72px;
      @media (max-width: 767px){
        font-size: 50px;
      }
      @media (max-width: 450px){
        font-size: 35px;
      }
    }
  }
}
.steps{
  padding: 80px 0 120px;
  @media(max-width: 767px){
    padding: 0px 0 40px;
  }
  &__row{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    position: relative;
    &:before{
      content: '';
      position: absolute;
      left: -70px;
      bottom: -90px;
      width: 95px;
      height: 145px;
      background-image: url('@/assets/img/vector/star.svg');
      background-repeat: no-repeat;
    }
    @media(max-width: 767px){
      grid-template-columns: 1fr;
    }
  }
  &__card{
    padding: 32px 24px;
    background: #1A1B23;
    border-radius: 25px;
    text-align: center;
    &-img{
      margin-bottom: 16px;
    }
    &-title{
      font-weight: 800;
      font-size: 32px;
      line-height: 130%;
      margin-bottom: 16px;
    }
    &-text{
      font-weight: 400;
      line-height: 1.5;
      color: #898CA9;
      margin-bottom: 36px;
    }
    &-link{
      color: #B982FF;
    }
  }
}
.mining{
  padding: 140px 0;
  text-align: center;
  @media(max-width: 767px){
    padding: 40px 0;
  }
  &__box{
    max-width: 780px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
    &:after{
      content: '';
      position: absolute;
      right: 0;
      bottom: 0;
      width: 60px;
      height: 60px;
      background-image: url('@/assets/img/vector/star-img.svg');
      background-repeat: no-repeat;
    }
    &-title{
      margin-bottom: 16px;
    }
    &-text{
      max-width: 580px;
      margin: 0 auto;
      font-weight: 400;
      line-height: 150%;
      color: #898CA9;
      margin-bottom: 32px;
    }
  }
}
.service{
  padding: 100px 0;
  position: relative;
  @media(max-width: 767px){
    padding: 50px 0;
  }
  &:before{
    content: '';
    position: absolute;
    width: 600px;
    height: 1000px;
    left: 0;
    top: -50%;
    background-image: url('@/assets/img/support-bg.png');
    background-repeat: no-repeat;
    @media (max-width: 650px){
      width: 100%;
    }
  }
  &:after{
    content: '';
    position: absolute;
    width: 600px;
    height: 1000px;
    right: 0;
    top: -90%;
    background-image: url('@/assets/img/vector/support-decor.svg');
    background-repeat: no-repeat;
    @media (max-width: 600px){
      width: 100%;
    }
  }
  &__row{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    position: relative;
    @media (max-width: 850px){
      grid-template-columns: 1fr;
    }
  }
  &__img{
    position: relative;
    z-index: 2;
    @media (max-width: 850px){
      margin: 0 auto;
    }
    & img{
      @media (max-width: 400px){
        width: 100%;
      }
    }
  }
  &__info{
    position: relative;
    z-index: 1;
    &-title{
      margin-bottom: 16px;
    }
    &-text{
      margin-bottom: 32px;
      font-weight: 400;
      line-height: 150%;
      color: #898CA9;
    }
    &-btn{
      border: 1px solid #FFFFFF;
      background: transparent;
    }
  }
}
.secure{
  padding: 120px 0 80px;
  position: relative;
  @media(max-width: 767px){
    padding: 40px 0 40px;
  }
  &:after{
    content: '';
    position: absolute;
    right: 0;
    top: -39%;
    width: 890px;
    height: 860px;
    background-image: url('@/assets/img/vector/secure-decor.svg');
    background-repeat: no-repeat;
  }
  &__box{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    position: relative;
    z-index: 3;
    @media (max-width: 992px){
      display: flex;
      flex-direction: column-reverse;
    }
    &-title{
      margin-bottom: 16px;
    }
    &-text{
      margin-bottom: 32px;
      font-weight: 400;
      line-height: 150%;
      color: #898CA9;
    }
    &-img{
      position: relative;
      z-index: 2;
      @media (max-width: 850px){
        margin: 0 auto;
      }
      @media (max-width: 500px){
        width: 300px;
      }
      & img{
        @media (max-width: 992px){
          width: 100%;
        }
      }
    }
  }
}
.receive{
  padding: 80px 0 0px;
  max-width: 780px;
  margin: 0 auto;
  text-align: center;
  @media (max-width: 767px){
    padding: 40px 0;
  }
  &__box{
    &-title{
      border-bottom: 3px solid white;
      width: fit-content;
      margin: 0 auto;
      margin-bottom: 16px;
      @media (max-width: 500px){
        border-bottom: 0px;
      }
    }
    &-text{
      font-weight: 400;
      line-height: 150%;
      color: #898CA9;
      margin-bottom: 32px;
      & span{
        color: white;
      }
    }
    &-input{
      margin: 0 auto;
    }
  }
}
</style>
