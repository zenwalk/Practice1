<template>
  <div>
      <h1>{{message}}</h1>
  </div>
</template>

<script>
export default {
  data() {
      return {
          message: 'hello,world'
      }
  }
}
</script>

<style scoped>
div {
    border: solid 2px lightgray;
}

h1 {
    color: red;
}
</style>


