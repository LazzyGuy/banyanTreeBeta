import Vue from 'vue'
import Vuex from 'vuex'

// helper function for reciving data from firebase
// import { getUid } from '../src/backend/forStore'
Vue.use(Vuex)



export const store = new Vuex.Store({
  state: {
    logEmail: '',
    logPassword: '',
    cards: [],
    Uid: '',
    logOut: false,
    currentUser: {
      name: '',
      id: null,
      profileUrl: null,
      description: null
    }
  },

  getters:{

  },
  
  mutations: {
    setData(state) {
      state.Uid = getUid();
      console.log(state.Uid);
    },
    logout(state){
      state.logOut = true
    }
  }
})

