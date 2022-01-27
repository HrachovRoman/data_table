<template>
  <div class="table-row">
      <div class="row row__id">{{row_data.id}}</div>
      <div class="row row__name">{{row_data.name}}</div>
      <div class="row row__username">{{row_data.username}}</div>
      <div class="row row__email">{{row_data.email}}</div>
  </div>
</template>

<script>
export default {
    name: 'TableRow',
    props: {
        row_data: {
            type: Object,
            required: false
        }
    }

}
</script>

<style scoped>
    .table-row {
        display: flex;
        justify-content: space-around;
    }
    .row {
        flex-basis: 25%;
        padding: 10px 0px;
        text-align: left;
    }

</style>