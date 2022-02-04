<template>
      <tbody>
          <tr v-for="row in paginatedData" :key="row">
              <td>{{row.id}}</td>
              <td>{{row.name}}</td>
              <td>{{row.username}}</td>
              <td>{{row.email}}</td>
              <td>
                <button class="bnt-del" @click="remove(row.id)">Del</button>
                <button 
                    class="btn-details" 
                    @click="showDetails(row.id)"
                >Details</button>
                <button 
                    class="btn-id" 
                    @click="showIdUser(row.id)"
                >ID</button>
              </td>
          </tr>
                <button 
                    class="btn-prev" 
                    :disabled="pageNumber === 0" 
                    @click="prevPage">
                    Previous
                </button>
                <button 
                    class="btn-next"
                    :disabled="pageNumber >= pageCount -1" 
                    @click="nextPage">
                    Next
                </button>
      </tbody>
    <Card v-if='isCardVisible'
            :currentUser = 'currentUser'
            :isCardVisible='false'
/> 
</template>

<script>
import Card from '../components/Card'
import {mapGetters} from 'vuex'
import router from '../router/index'

export default {
    name: 'TableRow',
    components: {
        Card
    },
    data() {
        return {
            user: '',
            currentUser: {},
            isCardVisible: false,
            pageNumber: 0,
            size: 20
        }
    },
    props: {
        users_data: {
            type: Object,
            required: false
        }
    },
    computed: {
        pageCount(){
            let l = this.users_data.length,
                s = this.size;
            return Math.ceil(l/s);
        },
        paginatedData(){
            const start = this.pageNumber * this.size,
                    end = start + this.size;
            return this.users_data.slice(start, end);
        }
    }, 
    methods: {
        ...mapGetters({
            userId: 'getUserId'
        }),
        remove (id) {
            this.$store.commit('REMOVE_ID', id);
        },
        showDetails (id) {
            this.isCardVisible = true;
            this.currentUser = this.$store.getters.getUsersList.find(user => user.id === id)
            console.log(this.currentUser);
        },
        async showIdUser (id) {
            await this.$store.dispatch('getIdUser', id);
            router.push({ path: `/${id}` })
        },
        nextPage(){
            this.pageNumber++;
        },
        prevPage(){
            this.pageNumber--;
        },
    }
}
</script>

<style scoped>
.table tbody tr:nth-child(odd){
	background: #fff;
}
.table tbody tr:nth-child(even){
	background: #F7F7F7;
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
.btn-id {
    background-color: white; 
    color: black; 
    border: 2px solid #2856b8;
}
.btn-id:hover {
    background-color: #2856b8;
    color: white;
}
ul{
    padding: 4px 4px;
    border: 1px solid black;
}
li{
    list-style-type:none;
    padding:4px 4px;
}
li:hover{
    background-color:#eee;
}
li:nth-child(2n){
    background-color:#ddd;
}
li:nth-child(2n):hover{
    background-color:#ccc;
}
.btn-next, .btn-prev{
    width:100px;
    height:40px;
    background-color:#eef;
    margin: 5px
}
.btn-next, .btn-prev:hover{
    cursor:pointer;
}
button:hover:disabled{
    cursor:not-allowed;
}
</style>