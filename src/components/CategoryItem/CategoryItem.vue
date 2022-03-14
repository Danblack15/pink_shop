<template>
  <li class="category-item">
    <router-link 
      :to="'/' + item.id" 
      class="category-item__href"
    >
      {{ item.name }}
    </router-link>
  </li>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style src="./CategoryItem.css" scoped>

</style>