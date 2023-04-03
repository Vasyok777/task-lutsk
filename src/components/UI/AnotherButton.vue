<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.btn{
  text-align: center;
  padding: 10px 5px;
  background: #2B2B2B;
  border-radius: 12px;
  color: #fff;
  width: 100%;
  font-weight: 500;
  line-height: 19px;
  border: 1px solid #2B2B2B;
  @media (max-width: 767px){
    max-width: 200px;
  }
}
</style>