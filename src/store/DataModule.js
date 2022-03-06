import axios from "axios"

export const DataModule = {
	state: () => ({
		data: [],
		category: [],
		isLoading: false,
		modalLoading: false,
		modalVisible: false,
		basketVisible: false,
		selectedProductId: null,
		productItem: [],
		basketLength: {},
		submitForm: null
	}),

	getters: {
		sortData(state) {
			return state.data.filter((p) => p.parent_id == -1)
		},
		isLoading(state) {
			return state.isLoading
		},
		modalLoaing(state) {
			return state.modalLoading
		},
		data(state) {
			return state.data
		},
		modalVisible(state) {
			return state.modalVisible
		},
		selectedProductId(state) {
			return state.selectedProductId
		},
		productitem(state) {
			return state.productItem
		},
		basketLength(state) {
			return state.basketLength
		},
		basketVisible(state) {
			return state.basketVisible
		},
		submitForm(state) {
			return state.submitForm
		}
	},

	mutations: {
		setData(state, data) {
			state.data = data
		},
		setLoading(state, bool) {
			state.isLoading = bool
		},
		setModalLoading(state, bool) {
			state.modalLoading = bool
		},
		setModalVisible(state, modalVisible) {
			state.modalVisible = modalVisible
		},
		setSelectedProductId(state, item) {
			state.selectedProductId = item
		},
		setDataProduct(state, item) {
			state.productItem = item.data
		},
		setBasketLength(state, length) {
			state.basketLength = length
		},
		setBasketVisible(state, bool) {
			state.basketVisible = bool
		},
		setSubmit(state, res) {
			state.submitForm = res
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
		async showModal({state, commit}, item) {
			commit('setSelectedProductId', item)
			commit('setModalVisible', !state.modalVisible)

			let id = item.id

			try {
				commit('setModalLoading', true)

				const api = `http://test1.web-gu.ru/?action=show_product&id=${id}`
				const res = await axios.get(api)

				commit('setDataProduct', res)
			} catch (error) {
				alert('Ошибка')
				console.log(error)
			} finally {
				commit('setModalLoading', false)
			}
		},
		basketLength({state, commit}) {
			if (localStorage.basket) {
				let basket = Object.values(JSON.parse(localStorage.basket))

				commit('setBasketLength', basket)
			} else {
				commit('setBasketLength', [])
			}
		},
		basketVisible({state, commit}) {
			commit('setBasketVisible', !state.basketVisible)
			commit('setSubmit', null)
		},
		removeBasketItem({state, commit}, item) {
			let basket = state.basketLength.filter((p) => p.id !== item.id)

			commit('setBasketLength', state.basketLength.filter((p) => p.id !== item.id))

			basket = JSON.stringify(Object.assign({}, basket))

			localStorage.setItem('basket', basket)
		},
		async submitForm({state, commit}) {
			try{
				const api = 'http://test1.web-gu.ru/?action=send_form'

				const res = await axios.get(api)

				commit('setSubmit', res)
				commit('setBasketLength', [])
			} catch(error) {
				alert('Ошибка')
				console.log(error)
			} finally {
				localStorage.removeItem('basket')
			}
		}

	},

	namespaced: true
}