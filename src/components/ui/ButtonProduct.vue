<template>
  <input type="button" value="Добавить в корзину">
</template>

<script>
export default {
    name: 'ButtonProduct',
}
</script>

<style scoped>
input{
    padding: 7px 18px;
    background: #FF6969;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);
    border-radius: 5px;
    color: #FFFFFF;
    font-size: 18px;
    cursor: pointer;
}
input:hover{
  opacity: 0.8;
}
</style>