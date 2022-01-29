import { createStore } from 'vuex'
import UsersService from '@/services/users.service';

export default createStore({
  state: {
    users: [],
    userFiltered: []
  },
  mutations: {
    DEBOUNCE_INPUT (state, value) {
      if (value === '') {
        state.userFiltered = state.users;
       } else { 
        state.userFiltered = state.users
        .filter(user => user.email.toLowerCase() 
        .includes(value.toLowerCase()));
      }
    },
    REMOVE_ID (state, id) {
      state.users = state.users.filter((user) => user.id !== id);
    },
    SET_USERS_LIST(state, payload) {
      state.users = payload;
    }
  },
  actions: {
    getUsersFromApi({commit}) {
      return new Promise ((resolve, reject) => {
        UsersService
          .usersList()
          .then(response => {
            commit('SET_USERS_LIST', response.data);
            return resolve(response.data);
          })
          .catch(error => reject(error));
      });
    }
  },
  getters: {
    getUsersList(state){
      return state.users;
    } ,
    usersFiltered(state) {
      return state.userFiltered;
    },
  }
})
