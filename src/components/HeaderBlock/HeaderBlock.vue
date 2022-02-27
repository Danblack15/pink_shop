<template>
  <header>
    <router-link to="/" class="logo">
      <img src="@/assets/img/money.svg" alt="money" />
      <p>SHOP</p>
    </router-link>
    <section class="header_links">
      <CategoryList/>
      <div class="wrapper_basket">
        <img src="@/assets/img/basket.svg" alt="" />
      </div>
    </section>
  </header>
</template>

<script>
import CategoryList from '@/components/CategoryList'

export default {
	data() {
    return {
			
		}
  },
	components: {
		CategoryList
	},
	computed: {
		
	},
	mounted() {

	}


};
</script>

<style scoped>
header {
  width: 100%;
  height: 60px;
  background: #ffffff;
  display: flex;
  position: fixed;
  z-index: 9999;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);
}
.logo {
  background: #ff6969;
  width: 165px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  font-size: 20px;
}
.logo img {
  margin-right: 7px;
}
.header_links {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.header_links__category {
  display: flex;
  align-items: center;
}
.wrapper_basket {
  display: flex;
  align-items: center;
  padding: 0 20px;
}
.wrapper_basket img {
  cursor: pointer;
}
</style>