<template>
  <div class="main-body">
    <header>
      <nav class="navbar bg-dark text-light">
        <p class="navbar-brand">
          {{title}}
        </p>
      </nav>
    </header>

    <div class="chatbox">
      <div class="chatlogs">


        <div class="chat" v-for="msg in friend" v-bind:key="msg.id">
          <div class="user-photo"><img :src="img2" alt=""></div>
          <p class="chat-message">
            {{msg.msg}}
          </p>
        </div>

        <!-- <div class="chat" v-class="{'friend': isFriend,'self': isSelf}" v-for="msg in friend" v-bind:key="msg.id">
          <div class="user-photo"><img :src="img2" alt=""></div> -->

        <!-- <div class="chat self" v-for="msg in self" v-bind:key="msg.id">
          <div class="user-photo"><img :src="img" alt=""></div>
          <p class="chat-message">
            {{msg.msg}}
          </p>
        </div> -->
      </div>

      <div class="chat-form">
        <textarea v-model="msg"></textarea>
        <button @click="sendMsg">send</button>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    props: ['title','myMsg','msgFromOther'],
    methods: {

      sendMsg() {
        this.self.push({
          msg: this.msg
        })
        this.msg = ''
      }

    },


    data() {
      return {
        friend: this.myMsg,
        self: this.msgFromOther,
        img2: 'https://avatars2.githubusercontent.com/u/24357511?s=460&v=4',
        img: 'https://avatars3.githubusercontent.com/u/25266614?s=400&u=771e830e8a5b994b14e84208b8fdea62c732b282&v=4',
        msg: '',
        myMsgLen: false
      }
    }

  }

</script>

<style scoped>
  .main-body {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 60px;
    right: 0;
  }

  /* header  */

  header {}

  .navbar {
    height: 50px;
    opacity: 0.5;
  }

  /* section ends  */

  .chatbox{
    width: 500px;
    min-width: 390px;
    height: 600px;
    background: rgba(0, 0, 0, .1);
    padding: 0px;
    margin: 20px auto;
  }
  .chatlogs{
    padding: 10px;
    width: 100%;
    height: 500px;
    overflow-x: hidden; 
    overflow-y: scroll;
    overflow: auto;
  }
  .chatlogs::-webkit-scrollbar{
    width: 10px;
  }
  .chatlogs::-webkit-scrollbar-thumb{
    border-radius: 5px;
    background: rgba(0, 0, 0, .1);
  }
  .chat{
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    margin-bottom: 10px;
  }
  .chat .user-photo{
    width: 60px;
    height: 60px;
    background: #cccccc;
    border-radius: 50%;
    overflow: hidden;
  }
  .chat .user-photo img{
    width: 100%;
  }
  .chat .chat-message{
    width: 80%;
    padding: 15px;
    margin: 5px 10px 0;
    background: springgreen;
    border-radius: 10px;
    color: #000000;
    font-size: 18px;
  }
  .friend .chat-message{
    background: #1adda4;
  }
  .self .chat-message{
    background:springgreen;
    order: -1;
  }
  .chat-form{
    margin-top: 20px;
    display: flex;
    align-items: flex-start;
  }
  .chat-form textarea{
    background: whitesmoke;
    width: 75%;
    border-radius: 10px;
    margin-left: 10px;
    resize: none;
    font-size: 18px;
    color: #000;
  }
  .chat-form textarea:focus{
    background: #fff;
  }
   .chat-form textarea::-webkit-scrollbar{
    width: 10px;
  }
  .chat-form textarea::-webkit-scrollbar-thumb{
    border-radius: 5px;
    background: rgba(0, 0, 0, .1);
  }
  .chat-form button{
    background: springgreen;
    border: none;
    padding: 5px 15px;
    font-size: 30px;
    color: #fff;
    margin: 0 10px;
    border-radius: 3px;
    box-shadow: 0 3px 0 #056e3a;
    cursor: pointer;
  }
   .chat-form button:hover{
     background: #03fb39;
   }

@media (max-width: 500px){
  .chatbox{
    padding: 0px;
    margin: auto;
  }
  .chat-form{
    margin-top: 10px;
  }
   .chat-form textarea{
    background: whitesmoke;
    width: 42%;
    border-radius: 10px;
    margin-left: 0px;
    resize: none;
    font-size: 18px;
    color: #000;
  }
  .chat-form button{
    padding: 1px 5px;
    font-size: 25px;
  }
  .chat .user-photo{
    width: 40px;
    height: 40px;
  }
  .chat .chat-message{
    width: 50%;
    padding: 5px;
    font-size: 17px;
  }
}


</style>
