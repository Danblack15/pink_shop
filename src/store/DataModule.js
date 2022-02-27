import axios from "axios"

export const DataModule = {
	state: () => ({
		data: [],
		category: [],
		isLoading: false
	}),

	getters: {
		sortData(state) {
			return state.data.filter((p) => p.parent_id == -1)
		}
	},

	mutations: {
		setData(state, data) {
			state.data = data
		},
		setSort(state, category) {
			state.category = category
		},
		setLoading(state, bool) {
			state.isLoading = bool
		}
	},

	actions: {
		async fetchData({state, commit}) {
			try {
				commit('setLoading', true)

				const api = 'http://test1.web-gu.ru/'
				const res = await axios.get(api)
				commit('setData', res.data)

			} catch (error) {
				alert('Ошибка')
				console.log(error)
			} finally {
				commit('setLoading', false)
			}
		},
		
	},

	namespaced: true
}