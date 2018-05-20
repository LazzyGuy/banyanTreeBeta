<template>
  <div>
    <nav class="banyan-navbar">
      <nav-bar v-bind:b="b"></nav-bar>
    </nav>

    <section class="main-body">
      <ch-at title="Class Room" myMsg="messList" msgFromOther="messList"></ch-at>
    </section>

  </div>
</template>

<script>
  import Dashnav from './dashnav'
  import Chat from './chat/chatUi'
  import confirmUser from '../../backend/confirmuser'
  export default {
    name: 'classroom',
    data() {
      return {
        b: true,
        name: 'suraj',
        msg: '',
        count: 1,
        messList: [{
          id: 0,
          name: 'suraj',
          msg: 'hello my name is suraj',
        }]
      }
    },

    created(){
      confirmUser(this.$router,this.$store.state.logOut);
    },

    components: {
      'nav-bar': Dashnav,
      'ch-at': Chat
    },

    methods: {
      sendMsg: function () {
        this.messList.push({
          id: this.count,
          name: this.name,
          msg: this.msg
        })
        this.count++
          console.log(this.messList);

      }
    }
  }

</script>


<style scoped>
  
  * {
    margin: 0;
    padding: 0;
  }


  section {
    background: url('../../assets/newbg.svg');
    height: 100vh;
    margin-left: 60px;
  }

</style>
