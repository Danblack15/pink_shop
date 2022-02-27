<template>
  <section class="content">
    <PodcategoryBlock />
    <router-view></router-view>
  </section>
</template>

<script>
import PodcategoryBlock from '@/components/PodcategoryBlock'

export default {
  components: {
    PodcategoryBlock
  }
}
</script>

<style scoped>
.content{
  display: flex;
}
</style>