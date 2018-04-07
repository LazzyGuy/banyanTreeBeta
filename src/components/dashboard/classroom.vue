<template>
  <div>
      <nav class="banyan-navbar">
          <nav-bar v-bind:b="b"></nav-bar>
      </nav>
      
      <section class="main-body">
          <div class="chatbody">
              
          </div>
      </section>

  </div>
</template>

<script>

import Dashnav from './dashnav'

export default {
  name: 'classroom',
  data(){
      return{
          b: true
      }
  },
  components: {
      'nav-bar': Dashnav,
  }
}
</script>


<style scoped>
*{
    margin: 0;
    padding: 0;
}


section{
    background: burlywood;
    height: 100vh;
    margin-left: 60px;
}

</style>
