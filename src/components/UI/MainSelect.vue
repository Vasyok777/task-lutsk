<template>
  <div>
    <div class="select" :data-state="isOpen ? 'active' : ''">
      <div 
        class="select__title" 
        :data-default="options[0].name" 
        @click="toggleMenu"
      > 
      <img class="img" :src="selectedImg">
      {{ selectedOption }} <span class="decor">0.000000</span></div>
      <div class="select__content">
        <input 
          v-for="(option, index) in options" 
          :key="option.id" 
          :id="'singleSelect' + index" 
          class="select__input" 
          type="radio" 
          :name="'singleSelect-' + Math.random()" 
          :value="option.name" 
          v-model="selectedOption"
          @click="toggleImage(index)"
        />
        <label 
          v-for="(option, index) in options" 
          :key="option.id" 
          :for="'singleSelect' + index" 
          class="select__label"
        >
         <img class="img" :src="option.imgSrc">
          {{ option.name }}
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const isOpen = ref(false);
    const options = [
      {
        id: 1,
        name: 'BTC',
        img: 'btc-icon',
        imgSrc: require('@/assets/img/vector/btc-icon.svg'),
      },
      {
        id: 2,
        name: 'ETH',
        img: 'etc-icon',
        imgSrc: require('@/assets/img/vector/etc-icon.svg'),
      }];
    const selectedOption = ref(options[0].name);
    const selectedImg = ref(options[0].imgSrc);

    const toggleMenu = () => {
      isOpen.value = !isOpen.value;
    };

    const toggleImage = (index) => {
      selectedImg.value = options[index].imgSrc;
      closeMenu()
    };

    const closeMenu = () => {
      isOpen.value = false;
    };

    return {
      isOpen,
      options,
      selectedOption,
      toggleMenu,
      toggleImage,
      selectedImg,
      closeMenu
    };
  },
};
</script>


<style lang="scss">
.select {
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.05);
  padding: 19px 26px 15px 22px;
  border-radius: 10px;
  &[data-state="active"] {
    .select__title {
      &::before {
        transform: translate(-3px, -50%) rotate(-45deg);
      }

      &::after {
        transform: translate(10px, -50%) rotate(45deg);
      }
    }
    
    .select__content {
      display: block;
      opacity: 1;
      transition: all .3s ease-in-out;
    }
    
    .select__label + .select__input + .select__label {
      max-height: 40px;
      border-top-width: 1px;
    }
  }
}
.select__title {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 52%;
    right: 22px;
    display: block;
    width: 20px;
    height: 4px;
    transition: all 0.3s ease-out;
    background-color: #333333;
    transform: translate(-3px, -50%) rotate(45deg);
  }
  &::after {
    transform: translate(10px, -50%) rotate(-45deg);
  }
  &:hover {
    border-color: #D8093A;
    &::before,
    &::after {
      background-color: #D8093A;
    }
  }
}
.select__content {
  position: absolute;
  top: 84px;
  left: 3px;
  width: 100%;
  background-color: #000;
  border-top: none;
  transition: all 0.3s ease-out;
  opacity: 0;
  z-index: 8;
  border-radius: 10px;
  display: none;
  transition: all .3s ease-in-out;
}
.select__input {
  display: none;
  &:disabled + label {
    opacity: 0.6;
    pointer-events: none;
  }
}
.select__label {
  display: flex;
  align-items: center;
  width: 100%;
  height: 66px;
  max-height: 100%;
  padding: 0 16px;
  transition: all 0.2s ease-out;
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  &:hover {
    background-color: #333333;
    color: #ffffff;
  }
}
.img{
  margin-right: 12px;
}
.decor{
  display: inline-block;
  margin-left: auto;
  font-size: 20px;
  line-height: 24px;
  text-transform: capitalize;
  color: rgba(255, 255, 255, 0.2);
  margin-right: 15px;
}
</style>