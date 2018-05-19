import Vue from 'vue'
import Vuex from 'vuex'


import { getUid } from '../src/backend/forStore'
Vue.use(Vuex)



export const store = new Vuex.Store({
  state: {
    logEmail: '',
    logPassword: '',
    cards: [],
    Uid: '',
    currentUser: {
      name: '',
      id: null,
      profileUrl: null,
      description: null
    }
  },
  
  mutations: {
    setData(state) {
      state.Uid = getUid();
      console.log(state.Uid);
    }
  }
})

