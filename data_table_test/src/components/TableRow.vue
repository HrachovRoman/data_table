<template>

  <div class="table-row">
      <div class="row row__id">{{row_data.id}}</div>
      <div class="row row__name">{{row_data.name}}</div>
      <div class="row row__username">{{row_data.username}}</div>
      <div class="row row__email">{{row_data.email}}</div>
      <div class="row row__options">
          <button class="bnt-del" @click="remove(row_data.id)">Del</button>
          <button 
            class="btn-details" 
            @click.stop="showDetails(row_data.id)"
          >Details</button>
      </div>
  </div>
  <div>
  </div>
  <Card 
    v-if="isCardVisible"
    @closeCard='closeDetailsCard'
  >
  <div class="detail-info">
      <ul><strong>address:</strong> 
          <li>city: {{currentUser.address.city}}</li>
          <li>geo:
              <ul>lat: {{currentUser.address.geo.lat}}</ul>
              <ul>lng: {{currentUser.address.geo.lng}}</ul>
          </li>
          <li>street: {{currentUser.address.street}}</li>
          <li>suite:  {{currentUser.address.suite}}</li>
          <li>zipcode: {{currentUser.address.zipcode}}</li>
      </ul>
      <ul><strong>company:</strong>
          <li>bs: {{currentUser.company.bs}}</li>
          <li>catchPhrase: {{currentUser.company.catchPhrase}}</li>
          <li>name: {{currentUser.company.name}}</li>
      </ul>
      <ul><strong>email:</strong> 
          {{currentUser.email}}</ul>
      <ul><strong>id:</strong> 
          {{currentUser.id}}</ul>
      <ul><strong>name:</strong> 
          {{currentUser.name}}</ul>
      <ul><strong>phone:</strong> 
          {{currentUser.phone}}</ul>
      <ul><strong>username:</strong> 
          {{currentUser.username}}</ul>
      <ul><strong>website: </strong>
          <a :href="'http://' + currentUser.website" target="_blank">
          {{currentUser.website}}</a> &#8592;Clickable</ul>
  </div>
  
  </Card>
</template>

<script>
import Card from '../components/Card'
export default {
    name: 'TableRow',
    components: {
        Card
    },
    data() {
        return {
            currentUser: {},
            isCardVisible: false,
        }
    },
    props: {
        row_data: {
            type: Object,
            required: false
        }
    },
    
    methods: {
    remove (id) {
        this.$store.commit('REMOVE_ID', id);
    },
    showDetails (id) {
        this.isCardVisible = true;
        this.currentUser = this.$store.getters.getUsersList.find(user => user.id === id)
        console.log(this.currentUser);
    },
    closeDetailsCard() {
        this.isCardVisible = false;
    }
}
}
</script>

<style>
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
</style>