<template>
  <div>
      <nav class="banyan-navbar">
          <nav-bar v-bind:d="d"></nav-bar>
      </nav>
      
      <section class="main-body">
          <ch-at title="Teacher Zone"></ch-at>
      </section>

  </div>
</template>

<script>

import Dashnav from './dashnav'
import Chat from './chat/chatUi'
  import confirmUser from '../../backend/confirmuser'
export default {
  name: 'teachzone',
  data(){
      return{
          d: true
      }
  },
  beforeMount(){
      confirmUser(this.$router);
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
