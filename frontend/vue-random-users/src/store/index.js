import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    usersFiltered:[],
    numUsers: 1,
    usersPag: [],
    page:1,
    value: [0,122],
    natSelected: '',
    genderSelected: ''
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
