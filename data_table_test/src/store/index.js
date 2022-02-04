import { createStore } from 'vuex'
import UsersService from '@/services/users.service';

export default createStore({
  state: {
    users: [],
    userId: []
  },
  mutations: {
    REMOVE_ID (state, id) {
      state.users = state.users.filter((user) => user.id !== id);
    },
    SET_USERS_LIST(state, payload) {
      state.users = payload;
    },
    SET_USER_ID(state, payload) {
      state.userId = payload;
    },
  },
  actions: {
    getUsersFromApi({commit}, pageNumber) {
      return new Promise ((resolve, reject) => {
        UsersService
          .usersList(pageNumber)
          .then(response => {
            commit('SET_USERS_LIST', response.data.users);
            return resolve(response.data);
          })
          .catch(error => reject(error));
      });
    },
    getIdUser({commit}, id) {
      return new Promise ((resolve, reject) => {
        UsersService
          .userId(id)
          .then(response => {
            commit('SET_USER_ID', response.data);
            return resolve(response.data);
          })
          .catch(error => reject(error));
      });
    },
  },
  getters: {
    getUsersList(state){
      return state.users;
    },
    getUserId(state) {
      return state.userId;
    },
  }
})
