<template>
  <router-link 
    :to="'/' + item.parent_id + '/' + item.id"
    class="podcategory_item"
  >
  {{ item.name }}
  </router-link>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.podcategory_item{
  width: 100%;
  padding: 16px 0;
  padding-left: 30px;
  border-bottom: 1px solid #E4E4E4;
}
.podcategory_item:hover{
  color: #FF6969;
}
</style>