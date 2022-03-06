<template>
  <router-link 
    :to="'/' + item.id" 
    class="category-item"
  >
    {{ item.name }}
  </router-link>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  }
};
</script>

<style src="./CategoryItem.css" scoped>

</style>