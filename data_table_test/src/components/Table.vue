<template>

      <label class="search_input">Sort e-mail</label>
      <input type="text" class="search_form" @keyup="debounceInput" v-model='searchStr'>
  <div class="v-table">
      <div class="v-table__header">
          <p>ID</p>
          <p @click="sortByName">Name
              <i class="material-icons">unfold_more</i>
          </p>
          <p @click="sortByUserName">USERNAME
              <i class="material-icons">unfold_more</i>
          </p>
          <p>E-MAIL</p>
          <p>Options</p>
      </div>
      <div class="v-table__body">
          <TableRow 
            v-for='row in userCards'
            :key = 'row.id'
            :row_data = 'row'
          />
      </div>
      <div class="v-table__pagination">
          <div class="page" 
            v-for='page in pages'
            :key='page'
            :class="{'page__selected': page === pageNumber}"
            @click="pageClick(page)"
          >{{page}}
          </div>
      </div>
  </div>

</template>

<script>
import TableRow from './TableRow'
import debounce from '../utils/debounce'

export default {
    name: 'Table',
    components: {
        TableRow,
        debounce,
    },
    props: {
        users_data: {
            type: Array,
            required: false
        },
    },
    data() {
        return {
            usersPerPage: 5,
            pageNumber: 1,
            searchStr: '',
            debounceString: ''
        }
    },

    computed: {
        pages() {
            return Math.ceil(this.users_data.length / 5)
        },
        paginatedUser() {
            let from = this.pageNumber * this.usersPerPage;
            let to = from + this.usersPerPage;
            return this.users_data.slice(from, to);
        },

        userCards(){
             if (this.debounceString === '') {
                return this.$store.getters.getUsersList;
            } else {
                this.$store.commit('DEBOUNCE_INPUT', this.debounceString)
                return this.$store.getters.USERS_FILTERED;
            }
        },
        
        debounceInput() {
            return debounce((() => this.debounceString = this.searchStr), 1000)
        },
    },
    
    methods: {
        pageClick(page) {
            this.pageNumber = page;
        },
        sortByName() {
            this.users_data.sort((a,b) => a.name.localeCompare(b.name))
            return this.users_data
        },
        sortByUserName() {
            this.users_data.sort((a,b) => a.username.localeCompare(b.username))
        },
    },

}
</script>

<style>
.search_input {
    margin: 5px;
}
.v-table {
    max-width: 900px;
    margin: 0 auto;
}
.v-table__header {
    display: flex;
    justify-content: space-around;
    border-bottom: solid 1px #e7e7e7;

}
.v-table__header p {
    display: flex;
    align-items: center;
    flex-basis: 25%;
    text-align: left;
    cursor: pointer;
}
.v-table__pagination {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 30px;
}
.page {
    padding: 8px;
    margin-right: 5px;
    border: solid 1px #e7e7e7;
}
.page:hover {
    background: #42b983;
    cursor: pointer;
    color:#e7e7e7;
}
.page__selected {
    background: #42b983;
    cursor: pointer;
    color:#e7e7e7; 
}
</style>