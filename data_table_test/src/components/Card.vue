<template>
<div class="card__wrapper" ref="card_wrapper">
    <div class="card">
        <div class="card__header">
            <span><strong>Details card ID:{{currentUser.id}}</strong></span>
            <span>
                <i 
                    class="material-icons"
                    @click="closeCard"
                >close</i>
            </span>
        </div>
    <div class="card__content">
        <div class="detail-info">
        <ul><strong>address:</strong> 
            <li>city: {{currentUser.address.city}}</li>
            <li>geo:
                <!-- <ul>lat: {{currentUser.address.geo.lat}}</ul> -->
                <!-- <ul>lng: {{currentUser.address.geo.lng}}</ul> -->
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
    </div>
        <div class="card__footer">
            <button class="close_modal" @click="closeCard">Ok</button>
        </div>
    </div>  
</div>            
</template>

<script>

export default {
    name: 'Card',
    components: {
    },
    props: {
        currentUser: {
            type: Object,
            required: false
        },
        isCardVisible: false
    },
    methods: {
        closeCard() {
            this.$parent.isCardVisible = !this.$parent.isCardVisible
            //этот метод противоречит концепции, менять данные в род.компоненте
            // лучше все же делать так this.$emit('closeCard')
        },
    },
    mounted() {
        let cardThis = this;
        document.addEventListener('click', function(item) {
            if(item.target === cardThis.$refs['card_wrapper']) {
                cardThis.closeCard();
            }
        })
    }
}
</script>

<style scoped>
.card__wrapper {
     background: #5a5a5a87;
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
    position: fixed;
    top: 50px;
    width:400px;
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
</style>