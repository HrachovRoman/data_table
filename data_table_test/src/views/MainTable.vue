<template>
   <div id="nav">
  <Table />
  </div>
</template>

<script>
import Table from '@/components/Table.vue'

export default ({
  name: 'app',
  components: {
    Table
  },
})
</script>

<style scoped>
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