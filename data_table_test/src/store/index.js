import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    users: [],
    userFiltered: []
  },
  mutations: {
    SET_USERS_TO_VUEX (state, users)  {
      state.users = users;
    },
    DEBOUNCE_INPUT (state, value) {
      if (value === '') {
        state.userFiltered = state.users;
       } else { 
        state.userFiltered = state.users
        .filter(user => user.email.toLowerCase() 
        .includes(value.toLowerCase()));
      }

    } 
  },
  
  actions: {
    GET_USERS_FROM_API({commit}) {
      return axios ('https://jsonplaceholder.typicode.com/users', {
        method: 'GET'
      })
      .then((response) =>{
        commit ('SET_USERS_TO_VUEX', response.data)
      });
    }
  },

  getters: {
    USERS(state) {
      return state.users;
    },
    USERS_FILTERED(state) {
      return state.userFiltered;
    }
  }
})
