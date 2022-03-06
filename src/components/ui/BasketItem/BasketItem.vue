<template>
  <div class="basket-item">
      <div>
          <img :src="this.item.img" alt="product">
      </div>
      <div>
          <p>{{ this.item.name }}</p>
          <p>{{ this.item.price.toLocaleString("ru-RU") }} &#8381;</p>
          <p @click="$emit('remove', item)">Убрать из корзины</p>
      </div>
  </div>
</template>

<script>
export default {
    name: 'BasketItem',

    props: {
        item: {
            type: Object,
            required: true
        }
    }
}
</script>

<style src="./BasketItem.css" scoped>

</style>