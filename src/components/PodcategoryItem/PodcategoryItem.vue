<template>
  <li class="podcategory-item">
    <router-link
      :to="'/' + item.parent_id + '/' + item.id"
      class="podcategory-item__href"
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

<style src="./PodcategoryItem.css" scoped>

</style>