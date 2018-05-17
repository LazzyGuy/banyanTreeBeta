import Vue from 'vue'
import Vuex from 'Vuex'
import firebase from 'firebase'
import config from "../src/backend/config";

const auth = firebase.auth()
const db = firebase.database() 

Vue.use(Vuex)



export const store = new Vuex.Store({
  state: {
    username: 'suraj',
    name: '',
    userEmail: '',
    cards: []
  },
  mutations:{
    set
  }
})

