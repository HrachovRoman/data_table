<template>
  <router-link to="/">Return to all Users</router-link>
  <div>
       <h3 class="user-card__id">Показать карточку пользователя ID:{{ $route.params.id }}</h3>
       <button class="show_card" @click="showCard">Показать</button>
  <Card v-if='isCardVisible'
      :currentUser = 'currentUser'
      :isCardVisible='false'
  />
  </div>
</template>

<script>
import Card from '../components/Card.vue'
import TableRow from '../components/TableRow.vue'
import {useRoute} from 'vue-router'
import UsersService from '../services/users.service'

export default ({
  name: 'idCard',
  components: {
    Card,
    TableRow
  },
  data() {
    return {
      currentUser: {},
      isCardVisible: false
    }
  },
  mounted() {
      const route = useRoute();
      this.getUser(route.params.id)
  },
  methods: {
    async getUser(id) {
        return await new Promise((resolve, reject) =>
        UsersService
            .userId(id)
            .then(response => {
            this.currentUser = response.data;
            return resolve(response.data)
            })
            .catch(error => {
            this.$router.replace('/error404')
            reject(error.message)
            })
        )
    },
    showCard() {
      this.isCardVisible = true;
    }
  }
})
</script>

<style scoped>
.card__wrap {
    background: crimson;
}
.card__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
}
.card {
    padding: 16px;
    position: relative;
    top: -10px;
    width: 400px;
    background: #bdffe1;
    box-shadow: 0 0 17px 0 #e7e7e7;
}
.card__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: solid 1px #e7e7e7;
    text-align: center;
}
.card__footer {
    float: right;
}
.card__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 13px;
    padding-top: 15px; 
}
.close_modal {
    position: relative;
    display: inline-block;
    width: 4em;
    height: 2.5em;
    line-height: 2.5em;
    vertical-align: middle;
    text-align: center;
    text-decoration: none;
    text-shadow: 0 -1px 1px #777;
    color: #fff;
    outline: none;
    border: 2px solid #F64C2B;
    border-radius: 5px;
    box-shadow: 0 0 0 60px rgba(0,0,0,0) inset, .1em .1em .2em #800;
    background: linear-gradient(#FB9575, #F45A38 48%, #EA1502 52%, #F02F17);
}
.close_modal:active {
    top: .1em;
    left: .1em;
    box-shadow: 0 0 0 60px rgba(0,0,0,.05) inset;
}
.material-icons {
    cursor: pointer;
}
.table-row {
        display: flex;
        justify-content: space-around;
        font-size: 13px;
        text-align: left;
    }
    .row {
        flex-basis: 25%;
        padding: 10px 0px;
        text-align: left;
        border-bottom: solid 1px #e7e7e7;
    }
    ul { 
        list-style-type: square; 
        list-style-position: outside; 
        color: navy; 
        text-align: left;
    }
    .bnt-del {
        background-color: white; 
        color: black; 
        border: 2px solid #f44336;
    }
    .bnt-del:hover {
        background-color: #f44336;
        color: white;
    }
    .btn-details {
        background-color: white; 
        color: black; 
        border: 2px solid #42b983;
        margin: 0 5px;
    }
    .btn-details:hover {
        background-color: #42b983;
        color: white;
    }
    .show_card {
      width:100px;
      height:40px;
      background-color:#eef;
    }
    .show_card:hover {
      cursor: pointer;
    }
</style>