<template>
  <div>
      <nav class="banyan-navbar" >
          <nav-bar v-bind:c="c"></nav-bar>
      </nav>
      
      <section class="main-body">
          <ch-at title="Gang chat"></ch-at>
      </section>

  </div>
</template>

<script>

import Dashnav from './dashnav'
import Chat from './chat/chatUi'
  import confirmUser from '../../backend/confirmuser'
export default {
  name: 'gang',
  data(){
      return{
          c: true
      }
  },
  created(){
      confirmUser(this.$router,this.$store.state.logOut);
    },
  components: {
      'nav-bar': Dashnav,
      'ch-at': Chat
  }
}
</script>


<style scoped>
*{
    margin: 0;
    padding: 0;
}


section{
    background: url('../../assets/newbg.svg');
    height: 100vh;
    margin-left: 60px;
}
@media screen and (max-width: 500px){
    section{
        margin-left: 50px;
    }
}

</style>
