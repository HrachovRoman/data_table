<template>
  <div id="nav">
  <Table 
    :users_data = 'USERS'
  />
  </div>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'
import {mapActions, mapGetters} from 'vuex'
import Table from './components/Table.vue'

export default ({
  name: 'app',
  components: {
    Table
  },

  computed: {
    ...mapGetters([
      'USERS'
    ])
  },

  methods: {
    ...mapActions([
      'GET_USERS_FROM_API'
    ])
  },

  mounted() {
    this.GET_USERS_FROM_API();
  }
})

</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
