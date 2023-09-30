import { createStore } from "vuex";

const state ={
  modal: !true
}

const getters ={
  getState: state => payload => state[payload]
}

const mutations ={
  toggler: (state, payload )=> state[payload] = !state[payload]
}

export default createStore({
  state,
  getters,
  mutations
})
