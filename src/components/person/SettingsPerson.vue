<template>
  <div class="card">
    <h2 class="card__title">
      Settings
    </h2>
    <p class="card__text">Sorry, this page is under construction</p>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
     
  }
})
</script>

<style lang="scss" scoped>
.card{
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  padding: 40px 50px;
  background: rgba(28, 28, 28, 0.6);
  border-radius: 10px;
  &__title{
    font-size: 48px;
    margin-bottom: 50px;
  }
  &__text{
    font-size: 24px;
  }
}
</style>