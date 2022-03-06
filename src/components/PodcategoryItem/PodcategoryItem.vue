<template>
  <router-link
    :to="'/' + item.parent_id + '/' + item.id"
    class="podcategory-item"
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
  },
};
</script>

<style src="./PodcategoryItem.css" scoped>

</style>