<template>
<div class="card__wrapper" ref="card_wrapper">
    <div class="card">
        <div class="card__header">
            <span><strong>Details card</strong></span>
            <span>
                <i 
                    class="material-icons"
                    @click="closeCard"
                >close</i>
            </span>
        </div>
        <div class="card__content">
            <slot></slot>
        </div>
        <div class="card__footer">
            <button class="close_modal" @click="closeCard">Ok</button>
        </div>
    </div>  
</div>            
</template>

<script>
import TableRow from '../components/TableRow.vue'

export default {
    name: 'Card',
    components: {
        TableRow,
    },
    props: {
        currentUser: {
            type: Object,
            required: false
        }
    },
    methods: {
        closeCard() {
            this.$emit('closeCard')
        }
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

<style>
.card__wrapper {
     background: #5a5a5a87;
     display: flex;
     justify-content: center;
     align-items: center;
     position: absolute;
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
/* .close_modal {
    padding: 8px;
    color: #ffffff;
    background: rgb(250, 52, 52);
} */
.material-icons {
    cursor: pointer;
}
</style>