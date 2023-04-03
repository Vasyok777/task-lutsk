<template>
  <button :class="['main-button']" >
    <slot />
  </button>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    href: String,
  },
  setup(){

  }
})
</script>

<style lang="scss">
.main-button{
  display: inline-block;
  padding: 1.25rem 2rem;
  background: linear-gradient(225deg, #18C8FF 14.89%, #933FFE 85.85%);
  border: 0;
  color: white;
  font-weight: 600;
  border-radius: 10px;
  transition: all .3s ease-in;
  &:hover{
    opacity: 0.8;
  }
}

</style>