<template>
  <div>
    <nav class="banyan-navbar">
      <nav-bar v-bind:b="b"></nav-bar>
    </nav>

    <section class="main-body">
      <div class="chatbody">

          <div class="chat-input" v-for="m in messList" v-bind:key="m.id">
              <ch-at>                                                                       
                  <template slot="name">name</template>
                  <template slot="msg">{{m.msg}}</template>
              </ch-at>
          </div>



          <div class="chat-box">
              <input class="input-control" type="text" v-model="msg">
              <button class="btn" @click="sendMsg">send</button>
          </div>

      </div>
    </section>

  </div>
</template>

<script>
  import Dashnav from './dashnav'
  import Chat from './smallcomponents/chatcard'
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
    components: {   
      'nav-bar': Dashnav,
      'ch-at': Chat
    },
    methods:{
        sendMsg: function(){
            this.messList.push({id: this.count,name: this.name,msg: this.msg})
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
  .chatbody{
      height: 100vh;
      width: 500px;
  }
  .chat-box{
      position: absolute;
      bottom: 0;
      margin: 20px;
      padding: 20px;
  }
  .chat-box input{
      padding: 10px;
  }

.chat-box button{
    padding: 10px;
}


</style>
