<template>
  <router-link class="logo" to="/">
    <img src="@/assets/img/vector/logo.svg" alt="Logo img">
    <h3 class="logo__name">Crypto</h3>
  </router-link>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({

})
</script>

<style lang="scss" scoped>
.logo{
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
  &__name{
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 2.25rem;
    line-height: 1.222;
  }
}
</style>