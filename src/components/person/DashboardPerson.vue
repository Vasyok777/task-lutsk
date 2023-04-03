<template>
  <div class="card card__wrapper">
    <div class="card__box">
      <div class="card__info card-bg">
        <div class="card__info-box card-info">
          <div class="card-info__card">
            <div class="card-info__img">
              <img src="@/assets/img/vector/total-assets.svg" alt="Total assets icon" class="card-info__images">
            </div>
            <div class="card-info__text">
              <p class="card-info__text-title">Total assets</p>
              <p class="card-info__text-price">$ 87.743</p>
            </div>
          </div>
          <div class="card-info__card">
            <div class="card-info__img">
              <img src="@/assets/img/vector/total-assets.svg" alt="Total assets icon" class="card-info__images">
            </div>
            <div class="card-info__text">
              <p class="card-info__text-title">Total assets</p>
              <p class="card-info__text-price">$ 87.743</p>
            </div>
          </div>
          <div class="card-info__card">
            <div class="card-info__img">
              <img src="@/assets/img/vector/total-assets.svg" alt="Total assets icon" class="card-info__images">
            </div>
            <div class="card-info__text">
              <p class="card-info__text-title">Total assets</p>
              <p class="card-info__text-price">$ 87.743</p>
            </div>
          </div>
        </div>
        <div class="card__info-selected сard-selected">
          <select class="card-selected__custom">
            <option value="eth">ETH</option>
          </select>
          <div class="card-selected__img">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="22" height="22" rx="11" fill="url(#paint0_linear_72_2195)"/>
              <path d="M10.9995 5L10.9189 5.27346V13.208L10.9995 13.2884L14.6825 11.1113L10.9995 5Z" fill="#343434"/>
              <path d="M10.9996 5L7.31641 11.1113L10.9996 13.2884V9.43714V5Z" fill="#8C8C8C"/>
              <path d="M10.9995 13.9858L10.9541 14.0411V16.8675L10.9995 17L14.6848 11.8098L10.9995 13.9858Z" fill="#3C3C3B"/>
              <path d="M10.9996 17V13.9858L7.31641 11.8098L10.9996 17Z" fill="#8C8C8C"/>
              <path d="M10.9995 13.2884L14.6826 11.1113L10.9995 9.43713V13.2884Z" fill="#141414"/>
              <path d="M7.31641 11.1113L10.9996 13.2884V9.43713L7.31641 11.1113Z" fill="#393939"/>
              <defs>
              <linearGradient id="paint0_linear_72_2195" x1="3.25" y1="2.40535e-07" x2="19.75" y2="23.25" gradientUnits="userSpaceOnUse">
              <stop stop-color="white"/>
              <stop offset="1" stop-color="#D9D9D9" stop-opacity="0.71"/>
              </linearGradient>
              </defs>
            </svg>
          </div>
          <p class="card-selected__price">$ 78,342</p>
        </div>
        <div class="card__info-diagram">
          <img src="@/assets/img/diagram.png" alt="Diagram img" class="card__info-diagram-img">
        </div>
      </div>
      <div class="card__token card-bg">
        <h5 class="card__token-title">Tokens</h5>
        <table class="card__token-table card__table">
          <thead class="card__table-header">
            <tr>
              <th class="card__table-title">Name</th>
              <th class="card__table-title">Balance</th>
              <th class="card__table-title">Profit</th>
              <th class="card__table-title">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="card__table-row">
                <img class="row-icon" src="@/assets/img/assets/bitcoin.svg" alt="Bitcoin icon">
                Bitcoin
              </td>
              <td class="card__table-row">1</td>
              <td class="card__table-row">0.003 BTC</td>
              <td class="card__table-row">
                <button class="card__table-btn">
                  add
                </button>
              </td>
            </tr>
            <tr>
              <td class="card__table-row">
                <img class="row-icon" src="@/assets/img/assets/ethreum.svg" alt="Ethreum icon">
                Ethereum</td>
              <td class="card__table-row">2</td>
              <td class="card__table-row">0.003 BTC</td>
              <td class="card__table-row">
                <button class="card__table-btn">
                  add
                </button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="card__other">
      <div class="card__assets card-bg">
        <h5 class="card__assets-title">Assets</h5>
        <div class="card__assets-box crypto" v-for="item in assets" :key="item.id">
          <div class="crypto__box">
            <div class="crypto__box-info">
              <div class="crypto__box-img">
                <img :src="require(`@/assets/img/assets/${item.img}.svg`)" :alt="item.alt" class="crypto__box-image">
                <p class="crypto__box-name">{{ item.title }}</p>
              </div>
            </div>
            <p class="crypto__box-price">$ {{ item.price }}</p>
          </div>
          <div class="crypto__diagram" >
            <div class="crypto__diagram-line" >
              <span :style="{'background': item.color}"></span>
            </div>
            <span>{{ item.prosent }}%</span>
          </div>
        </div>
        <another-button class="crypto__button-add">View All</another-button>
      </div>
      <div class="card__our card-bg">
        <div class="card__our-img">
          <img src="@/assets/img/our-community.png" alt="Our community img" class="card__our-images">
        </div>
        <h5 class="card__our-title">Join Our Community</h5>
        <p class="card__our-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <another-button>Join now</another-button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import AnotherButton from '../UI/AnotherButton.vue';
export default defineComponent({
  components: {
    AnotherButton,
  },
  setup(){
    const assets = ref([
      {
        id: 1,
        title: 'Bitcoin',
        price: '23.3B',
        img: 'bitcoin',
        alt: 'Bitcoin icon',
        color: 'linear-gradient(268.5deg, #FB03F5 -11.69%, #AA9CFF 112.48%)',
        prosent: 71.68,
      },
      {
        id: 2,
        title: 'Ethreum',
        price: '23.3B',
        img: 'ethreumA',
        alt: 'Ethreum icon',
        color: 'linear-gradient(180deg, #5CFF9C 0%, #00FFA3 100%)',
        prosent: 71.68,
      },
      {
        id: 3,
        title: 'Shiba',
        price: '23.3B',
        img: 'shiba',
        alt: 'Shiba icon',
        color: 'linear-gradient(268.5deg, #FB035C -11.69%, #FA9FA5 112.48%)',
        prosent: 71.68,
      },
      {
        id: 4,
        title: 'Solana',
        price: '23.3B',
        img: 'solona',
        alt: 'Solana icon',
        color: 'linear-gradient(268.5deg, #FB03F5 -11.69%, #AA9CFF 112.48%)',
        prosent: 71.68,
      },
      {
        id: 5,
        title: 'Tether',
        price: '23.3B',
        img: 'tether',
        alt: 'Tether icon',
        color: 'linear-gradient(268.5deg, #50AF95 -11.69%, #00FFB9 112.48%)',
        prosent: 71.68,
      },
    ]);

    return{
      assets
    }
  },
})
</script>

<style lang="scss" scoped>
.card{
  max-width: 1087px;
  width: 100%;
  margin: 0 auto;
  &__box{
    display: flex;
    flex-direction: column;
    gap: 30px
  }
  &__wrapper{
    display: grid;
    grid-template-columns: 71% 29%;
    gap: 30px;
    @media (max-width: 1020px){
      grid-template-columns: 1fr;
    }
  }
  &__info{
    padding: 41px 33px 41px 24px;
    &-box{
      display: flex;
      justify-content: space-between;
      margin-bottom: 50px;
      @media (max-width: 650px){
        gap: 20px;
        flex-wrap: wrap;
      }
    }
    &-selected{
      margin-bottom: 30px;
    }
    &-diagram-img{
      width: 100%;
    }
  }
  &__token{
    width: 100%;
    padding: 29px 89px 37px 40px;
    @media (max-width: 570px){
      display: none;
    }
    &-title{
      margin-bottom: 20px;
      font-size: 20px;
      line-height: 24px;
      color: #FFFFFF;
    }
    &-table{
      width: 100%;
      text-align: center;
    }
  }
  &__table{
    &-header{
    }
    &-title{
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #878787;
    text-align: inherit;
    &:nth-child(1){
      text-align: start;
    }
    }
    &-row{
      padding-top: 35px;
      &:nth-child(1){
      text-align: start;
      }
    }
    &-btn{
      padding: 4px 20px;
      background: rgba(255, 255, 255, 0.1);
      border: none;
      border-radius: 6px;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      color: #FFFFFF;
    }
  }
  &__other{
    display: flex;
    flex-direction: column;
    gap: 30px;
    @media (max-width: 1020px){
      display: grid;
      grid-template-columns: repeat(2, 1fr) ;
      gap: 20px;
    }
    @media (max-width: 767px){
      display: grid;
      grid-template-columns: 1fr ;
      gap: 20px;
    }
  }
  &__assets{
    width: 100%;
    padding: 30px;
    &-title{
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;
      margin-bottom: 20px;
    }
  }
  &__our{
    text-align: center;
    padding: 21px 30px 24px;
    &-img{
      width: 135px;
      height: 92px;
      margin: 0 auto 28px;
    }
    &-image{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    &-title{
      font-weight: 700;
      line-height: 19px;
      letter-spacing: 0.01em;
      margin-bottom: 12px;
    }
    &-text{
      font-weight: 400;
      font-size: 10px;
      line-height: 150%;
      text-align: center;
      letter-spacing: 0.01em;
      color: #FFFFFF;
      margin-bottom: 15px;
    }
  }
}
.card-info{
  &__card{
    display: flex;
    align-items: center;
    column-gap: 9px;
  }
  &__img{
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(176, 176, 176, 0.1);
    border-radius: 13.7544px;
    width: 60px;
    height: 60px;
  }
  &__text{
    &-title{
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      margin-bottom: 4px;
    }
    &-price{
      font-weight: 700;
      font-size: 24px;
      line-height: 29px;
    }
  }
}
.card-selected{
  &__custom{
    background: rgba(0, 0, 0, 0.4);
    border-radius: 25px;
    color: white;
    width: 87px;
    height: 32px;
    padding-left: 31px;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
  }
  &__price{
    display: inline-block;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    transform: translateY(2px);
  }
  &__img{
    display: inline-block;
    transform: translate(-77px, 7px);
  }
}
.row-icon{
  margin-right: 11px;
}
.crypto{
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  &__box{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 14px;
    &-info{
      display: flex;
    }
    &-img{
      display: flex;
      align-items: center;
      column-gap: 12px;
    }
  }
  &__button-add{
    margin: 0 auto;
    display: block;
  }
  &__diagram{
    display: flex;
    justify-content: space-between;
    align-items: center;
    &-line{
      background: #353535;
      border-radius: 100px;
      max-width: 168px;
      height: 8px;
      margin-right: 8px;
      & span{
        display: block;
        height: 8px;
        width: 120px;
        border-radius: 100px;
      }
    }
  }
}
.card-bg{
  background: rgba(28, 28, 28, 0.6);
  border-radius: 10px;
  @media (max-width: 1020px){
    height: max-content;
  }
}
</style>