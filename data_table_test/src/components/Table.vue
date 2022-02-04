<template>
    <div class="input_wrapp">
      <label class="search_input"><strong>Sort e-mail</strong></label>
      <input type="text" class="search_form" @keyup="debounceInput" v-model='searchStr'> 
    </div>
  <table class="table">
      <thead>
          <tr>
            <th>ID</th>
            <th @click="sortByName()">Name
                <i class="material-icons">unfold_more</i>
            </th>
            <th @click="sortByUserName()">USERNAME
                <i class="material-icons">unfold_more</i>
            </th>
            <th>E-MAIL</th>
            <th>Options</th>
          </tr>
      </thead>
          <TableRow 
            :users_data = 'debounceInputEnter'
          />
  </table>
</template>

<script>
import TableRow from './TableRow'
import debounce from '../utils/debounce'
import {mapGetters} from 'vuex'

export default {
    name: 'Table',
    components: {
        TableRow,
        debounce,
    },
    mounted() {
        this.$store.dispatch("getUsersFromApi")
    },
    data() {
        return {
            searchStr: '',
            debounceString: '',
            sort: true
        }
    },
    computed: {
        ...mapGetters({
            usersList: 'getUsersList'
        }),
        debounceInput() {
            return debounce((() => this.debounceString = this.searchStr), 1000)
        },
        debounceInputEnter() {
            if (!this.debounceString) return this.usersList;
            return this.usersList.filter(el => el.email.toUpperCase().includes(this.debounceString.toUpperCase()));
        },
    },
    methods: {
        sortByName() {
            this.sort = !this.sort
            if (this.sort) {
                return this.usersList.sort((a,b) => a.name.localeCompare(b.name))
            } else {
                return this.usersList.sort((b,a) => a.name.localeCompare(b.name))
            }
        },
        sortByUserName() {
            this.sort = !this.sort
            if (this.sort) {
                return this.usersList.sort((a,b) => a.username.localeCompare(b.username))
            } else {
                return this.usersList.sort((b,a) => a.username.localeCompare(b.username))
            }
        },
    },
}
</script>

<style scoped>
.input_wrapp {
    text-align: center;
}
.search_input {
    margin: 5px;
}
.table{
	border: 1px solid #eee;
	table-layout: fixed;
	width: 100%;
	margin-bottom: 20px;
    margin-top: 20px;
}
.table th {
	font-weight: bold;
	padding: 5px;
	background: #efefef;
	border: 1px solid #dddddd;
}
.table td{
	padding: 5px 10px;
	border: 1px solid #eee;
	text-align: left;
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