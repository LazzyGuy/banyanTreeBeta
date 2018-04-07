<template>
  <div>
      <nav class="banyan-navbar" >
          <nav-bar v-bind:c="c"></nav-bar>
      </nav>
      
      <section class="main-body">
          
      </section>

  </div>
</template>

<script>

import Dashnav from './dashnav'

export default {
  name: 'gang',
  data(){
      return{
          c: true
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
    background: peru;
    height: 100vh;
    margin-left: 60px;
}
@media screen and (max-width: 500px){
    section{
        margin-left: 50px;
    }
}

</style>
