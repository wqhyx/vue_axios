<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
  export default {
    name: 'store',
    data(){
      return {

      }
    },mounted(){
      /**存储 store */
      this.$store.dispatch('commitUsername','jack');
      console.log(this.$store.state.username);
    }
  }
</script>
