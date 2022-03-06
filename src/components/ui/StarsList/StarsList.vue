<template>
  <section class="rating">
    <img
      src="@/assets/img/starOn.svg"
      alt="star"
      v-for="(item, index) in rate"
      :key="index"
    />
    <div v-if="rate < 5">
      <img
        v-for="(item, index) in 5 - rate"
        :key="index"
        src="@/assets/img/starOff.svg"
        alt="star"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: "StarsList",

  props: {
    rate: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style src="./StarsList.css" scoped>

</style>