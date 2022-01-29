import { createStore } from 'vuex'
import UsersService from '@/services/users.service';

export default createStore({
  state: {
    users: [],
    userFiltered: []
  },
  mutations: {
    // SET_USERS_TO_VUEX (state, users)  {
    //   state.users = users;
    // },
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
    // GET_USERS_FROM_API({commit}) {
    //   return axios ('https://jsonplaceholder.typicode.com/users', {
    //     method: 'GET'
    //   })
    //   .then((response) =>{
    //     commit ('SET_USERS_TO_VUEX', response.data)
    //   });
    // },
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
    // USERS(state) {
    //   return state.users;
    // },
    getUsersList(state){
      return state.users;
    } ,
    
    USERS_FILTERED(state) {
      return state.userFiltered;
    },
  }
})
