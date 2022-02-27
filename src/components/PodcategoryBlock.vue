<template>
  <section class="podcategory_block">
		<ul v-if="!isLoading">
			<PodcategoryItem 
				v-for="item in podCategoryArr"
				:key="item.id"
				:item="item"
			/>
		</ul>
		<LoadingBlock v-else class="loading_block"/>
	</section>
</template>

<script>
import PodcategoryItem from './PodcategoryItem'
import { mapActions, mapState } from 'vuex'

export default {
	components: {
		PodcategoryItem
	},
	data() {
		return {
			podCategoryArr: [],
			isLoading: true
		}
	},
	methods: {
		...mapActions({
			fetchData: 'data/fetchData'
		}),
		podCategorySort() {
			if (this.$route.matched[1]) {
				var href = this.$route.params.category
			} else {
				var href = this.$route.path.substr(1)
			}
			this.podCategoryArr = this.data.filter((p) => p.parent_id == href)
			this.isLoading = false
		}
	},
	async mounted() {
		await this.fetchData()
		this.podCategorySort()
	},
	watch: {
		'$route.path'() {
			if (this.$route.matched[0].path == '/:category')
				this.podCategorySort()
		}
	},
	computed: {
		...mapState({
			data: state => state.data.data
		}),
	}

};
</script>

<style scoped>
.podcategory_block{
	min-width: 325px;
	height: 100vh;
	padding-top: 60px;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);
	position: relative;
}
.podcategory_block ul{
	display: flex;
	flex-direction: column;
}
.loading_block{
	margin-top: 100px;
}
.router-link-active{
	color: #FF6969;
}
</style>