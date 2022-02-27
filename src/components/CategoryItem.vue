<template>
  <router-link 
		:to="'/' + item.id" 
		class="category_item" 
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
    },
  },
	data() {
		return {
			
		}
	},
	methods: {

	}
};
</script>

<style>
.category_item {
  font-size: 18px;
  margin-right: 44px;
  height: 100%;
  display: flex;
  align-items: center;
  border-bottom: 4px solid white;
}
.category_item:hover {
  border-bottom: 4px solid #ff6969;
}
.selected{
	border-bottom: 4px solid #ff6969;
}
.router-link-active{
  border-bottom: 4px solid #ff6969;
}
</style>