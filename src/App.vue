<template>
    <HeaderBlock/>
  <router-view></router-view>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'

import HeaderBlock from '@/components/HeaderBlock/HeaderBlock'

export default {
    components: {
        HeaderBlock
    },
    data() {
        return {
            
        }
    },

    methods: {
		...mapMutations({

		}),
		...mapActions({
			fetchData: 'data/fetchData'
		})
	},

	mounted() {
		this.fetchData()
	},

	computed: {
		...mapState({
			data: state => state.data.data
		})
	}

}
</script>

<style>

</style>