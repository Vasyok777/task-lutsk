<template>
  <label>
    <slot/>
    <input class="input" type="text" required>
  </label>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    
  }
})  
</script>

<style lang="scss" scoped>
.input{
  margin-top: 10px;
  padding: 2px 10px;
  min-width: 100%;
  height: 50px;
  background: #16161E;
  border-radius: 10px;
  border: 1px solid #16161e;
  color: white;
}
</style>