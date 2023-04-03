<template>
  <div v-if="message" :class="['alert', message.type]">
    <p class="alert-title" v-if="title">{{title}}</p>
    <p class="alert-text">{{ message.value }}</p>
    <div class="alert-close" @click="close">
      <img src="@/assets/img/vector/close.svg" alt="Close icon" class="alert-close__img">
    </div>
  </div>
</template>

<script>
import { useAlertStore } from '@/store/alert'
import { computed } from 'vue';
export default {
  setup(){
    const store = useAlertStore();
    const TITLE_MAP= {
      primary: 'Successfully',
      danger: 'Error !!!',
      warning: 'WARNING'
    }
    const message = computed(()=>store.message)
    const title = computed(()=>message.value ? TITLE_MAP[message.value.type] : null)
    return {
      message,
      title,
      close: () => store.clearMessage()
    }
  }
}
</script>

<style lang="scss" scoped>
.alert{
  position: fixed;
  right: 0;
  top: 20px;
  max-width: 300px;
  width: 100%;
  color: #000;
  background-color: white;
  border-radius: 15px 0 0 15px;
  padding: 15px 20px;
  &:before{
    position: absolute;
    content: '';
    left: 0px;
    top: 0;
    bottom: 0;
    width: 12px;
    border-radius: 15px 0 0 15px;
  }
  &-title{
    color: #000;
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
  &-text{
    font-size: 14px;
  }
  &-close{
    position: absolute;
    width: 30px;
    height: 30px;
    right: 10px;
    top: 10px;
    &__img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
.primary.alert:before{
  background: green;
}
.danger.alert:before{
  background: red;
}
</style>