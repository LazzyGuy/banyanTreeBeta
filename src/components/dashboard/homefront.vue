<template>
  <div>
    <nav class="banyan-navbar">
      <nav-bar v-bind:a="a"></nav-bar>
    </nav>

    <section class="main-body">
      <div class="feed-col">
        <!-- button for opeaning  -->
        <button type="button" class="btn banyan-btn-smooth" data-toggle="modal" data-target="#post">
          <input type="text" class="form-control was-validated banyan-input-top" v-model="newmessage" placeholder="Any Announcements!">
        </button>
        <!-- Button for opeaning ends -->

        <!-- body which will open -->
        <div class="modal fade banyan-modal" id="post" tabindex="-1" role="dialog" aria-labelledby="post" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content text-white bg-success">
              <div class="modal-header">
                <h6 class="modal-title" id="exampleModalLongTitle">New Announcements</h6>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="form-group">
                <textarea name="newMessage" class="form-control modal-body no-curve-banyan bg-logo" id="messageArea" cols="30" rows="10" v-model="newmessage"
                  placeholder="write your message here..!" required></textarea>
                <button type="submit" class="form-control btn-success h2 btn no-curve-banyan-btn text-dark" @click="postCard" data-dismiss="modal">POST</button>
              </div>
            </div>
          </div>
        </div>
        <!-- body close hear -->

        <div class="banyan-view-post post-banyan">
          <div class="" v-for="card in cards" v-bind:key="card.id">
            <!-- FIXME: SPACE FOR MODALS -->
            <card-view>
              <template slot="title">{{card.name}}</template>
              <template slot="description">{{card.message}}</template>
              <template slot="image">
                <img src="../../assets/profile/me3.jpg">
              </template>
            </card-view>
            <!-- <card-view></card-view> -->
          </div>
        </div>

      </div>
    </section>

  </div>
</template>

<script>
  import Dashnav from './dashnav'
  import Card from './smallcomponents/card'
  import confirmUser from '../../backend/confirmuser'
  import { updateCard } from '../../backend/cardDataUpdate'
  import {
    logInUser
  } from '../../backend/loginuser.js'
  export default {
    name: 'homefront',
    data() {
      return {
        a: true,
        newmessage: '',
        id: 11,
        randomColor: 0,
        noOfCards: 0,
        breakLoop: true
      }
    },
    computed:{
      cards(){
        return this.$store.state.cards
      },
      name(){
        return this.$store.state.currentUser.name
      }
    },
    created() {
      // this.noOfCards = this.cards.length
      confirmUser(this.$router,this.$store.state.logOut);
    },
    beforeMount(){
      
    },
    methods: {
      postCard: function () {
        // updateCard(this.newmessage,this.name)
        console.log(this.$store.state.db);
        
      },

      colorTheTile: function () {
        this.randomColor = Math.floor(Math.random() * (9 - 0)) + 0;
        this.countOfForLoop++
          if (this.countOfForLoop == this.noOfCards) {
            this.breakLoop = !this.breakLoop
          }

        console.log(this.randomColor);
        s
      }
    },

    components: {
      'nav-bar': Dashnav,
      'card-view': Card
      // 'card-view': Card
    }
  }

</script>


<style scoped>
  .main-body {
    min-height: 100vh;
    height: 100%;
    margin-left: 60px;
    background: url('../../assets/newbg.svg');
    overflow: hidden;
  }

  .feed-col {
    min-height: 100vh;
    height: 100%;
    padding: 0;
  }

  /* side feed */

  .feed-col {
    text-align: center;
  }

  /* TODO: REMOVE HIGHLITING FROM THE TOP INPUT BAR */

  .banyan-btn-smooth {
    border-radius: 0;
    padding: 5px;
    width: 100%;
    background: transparent;
    border: none;
  }

  .banyan-input-top {
    border-radius: 50px;
    margin-top: 20px;
    padding: 10px;
    text-align: center;
    width: 100%;
    /* background: linear-gradient(rgba(113, 129, 113, 0.3), rgba(75, 78, 75,0.3)), url('../../assets/bg.jpeg') no-repeat; */
  }

  /* section for main banyan-view-post */

  .banyan-view-post {
    background: transparent;
    height: 100%;
    padding: 10px;
  }

  .post-banyan {
    display: flex;
    padding: 50px;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: baseline;
  }

  /* section for pop up from */

  .card {
    border-radius: 0px;
    box-shadow: 1px 1px 3px black;
  }

  .no-curve-banyan {
    border-radius: 0px;
  }

  .no-curve-banyan-btn {
    height: 60px;
  }

  .modal-content {
    background: transparent;
  }

  #messageArea:focus {
    outline: none;
  }

  .modal {
    border-bottom: 0px;
  }

  .form-group {
    border-bottom: 0px;
  }

  .banyan-card-inside-text {
    text-align: left;
    width: 70%;
  }

  .bg-logo{
    border: none;
    font-size: 20px;
  }

</style>
