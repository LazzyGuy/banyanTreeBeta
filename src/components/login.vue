<template>
  <div>

    <div class="navbar-banyan">

      <img class="banyan-logo-lol" src="../assets/mainlogo.png" alt="">

    </div>

    <div class="jumbotron vertical-center bg-light jumbo-banyan-cus">
      <div class="container bg-success banyan-center p-5">
        <form>
          <div class="form-group text-light">
            <label for="email">Email address</label>
            <input type="email" class="form-control" id="email" placeholder="Enter email" v-model="email">
          </div>
          <div class="form-group text-light">
            <label for="password">Password</label>
            <input type="password" class="form-control" id="password" placeholder="Password" v-model="password">
          </div>
          <a class="btn" @click="validate"><i class="icon fas fa-chevron-circle-right"></i></a>

        </form>
      </div>
    </div>

  </div>
</template>

<script>

  import firebase from 'firebase' 
  import {
    logInUser
  } from '../backend/loginuser'

  import { checkIfLoggedIn } from '../backend/init'

export default {
    name: 'login',
    data() {
      return {
        email: null,
        password: null,
        userdata: {}
      }
    },

    methods: {
      validate: function (e) {
        this.$store.state.logEmail = this.email
        this.$store.state.logPassword = this.password
        if(logInUser(this.email, this.password, this.$router)){
          this.$store.commit('setData')
          this.$router.push("/home")
        }
        e.preventDefault()
      }
      // TODO: CHECK
      // checkEmail: function(){      //   var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
      //   return pattern.test(this.email)
      // }
    },

    created(){
      //TODO: FIX THIS ITS THE CONDITION WHEN USER IS ALREADY SIGNED IN IN THE SYSTEM
      //forHome(this.$router)
      checkIfLoggedIn(this.$router);
    }




  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .vertical-center {
    /* Fallback for browsers do NOT support vh unit */
    min-height: 50vh;
    /* These two lines are counted as one :-)       */
    display: flex;
    align-content: center;

  }

  .banyan-logo-lol {
    height: 100px;
  }

  .banyan-center {
    width: 50vh;
    height: 45vh;
  }

  .navbar-banyan {
    background: #F8F9FA;
    text-align: center;
  }

  .jumbotron {
    padding-top: 20px;
  }

  .icon{
  font-size: 3.5rem;
  color: antiquewhite;
  }
  .icon:hover{
    color: whitesmoke;
  }


  /* 
  <div class="form-group text-white">
          <label for="email">Email address</label>
          <input type="email" class="form-control" id="email" v-model="email" required>
        </div>
        <div class="form-group text-white">
          <label for="password">Password</label>
          <input type="password" class="form-control" id="password" v-model="password" required>
        </div>
        
        <button type="submit" @click="validate" class="btn btn-dark text-white">LogIn</button>
   */

</style>
