<template>
  <div>
    <div class="navbar-banyan">

      <img class="banyan-logo-lol" src="../assets/mainlogo.png" alt="">

    </div>
    <div class="jumbotron bg-light vertical-center">
      <!-- first  -->
      <div class="first-slide container was-validated custom-1 bg-success text-light p-5" v-bind:class="{'d-none': first}">
        <form>
          <div class="form-group h5">
            <label for="fname">First Name</label>
            <input type="text" class="form-control p-2" v-model="fname" id="fname">
          </div>

          <div class="form-group h5">
            <label for="lname">Last Name</label>
            <input type="text" class="form-control p-2" v-model="lname" id="lname">
          </div>
          <a class="btn btn-custom-align-center" @click="goToSec">
            <i class="icon fas fa-chevron-circle-right"></i>
          </a>
        </form>
      </div>
      <!-- first-end -->

      <!-- second -->
      <div class="second-slide container custom-1 bg-success was-validated bg-secondary text-light p-3" v-bind:class="{'d-none': second}">
        <form>
          <div class="form-group">
            <label for="username">Username</label>
            <input type="text" class="form-control" id="username" v-model="username" aria-describedby="user">
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control" id="email" v-model="email">
          </div>

          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" id="password" v-model="password">
          </div>

          <div class="btn-banyan-align p-2">
            <a class="btn" @click="goBack">
              <i class="fas fa-chevron-circle-left icon"></i>
            </a>
            <!--   TODO: CHANGE THE VALIDATION -->
            <a class="btn" @click="goToThird">
              <i class="fas fa-chevron-circle-right icon"></i>
            </a>
          </div>
        </form>
      </div>
      <!-- third start -->
      <div class="first-slide container was-validated custom-1 bg-success text-light p-5" v-bind:class="{'d-none': third}">
        <form>

          <div class="input-group mb-3">
            <div class="custom-file">
              <input type="file" class="custom-file-input" id="profileImage" accept="image/*" @change="userProfile">
              <label class="custom-file-label" for="profileImage">Choose file for profile</label>
            </div>
          </div>

          <div class="form-group">
            <label for="description">Description</label>
            <textarea class="form-cntrol" id="description" cols="55" rows="5" v-model="des"></textarea>
          </div>

          <div class="btn-banyan-align p-2">
            <a class="btn btn-custom-align-center" @click="goBackSec">
              <i class="fas fa-chevron-circle-left icon"></i>
            </a>
            <a class="btn" @click="validation">
              <i class="fas fa-chevron-circle-right icon"></i>
            </a>
          </div>
        </form>
      </div>

      <!-- sedcond end -->

    </div>

    <div class="alert alert-danger" v-bind:class="{hidden: !wrong}" role="alert">
      {{errormsg}}
    </div>
  </div>
</template>

<script>
  import {
    addUser
  } from '../backend/adduser'

  export default {
    name: 'signup',
    data() {
      return {
        fname: '',
        lname: '',
        username: '',
        email: '',
        password: '',
        first: false,
        second: true,
        third: true,
        wrong: false,
        errormsg: '',
        fileUrl: '',
        des: ''
      }
    },
    methods: {
      // UI FUNCTION:
      goToSec: function () {
        if (this.fname.length + this.lname.length > 4) {
          this.first = true
          this.second = false
          this.third = true
          this.errormsg = ''
          this.wrong = false
        } else if (this.fname.length + this.lname.length == 0) {
          this.errormsg = 'Provide your name to continue :)'
          this.wrong = true
        } else if (this.fname.length + this.lname.length < 3) {
          this.errormsg = 'char are too short try again :)'
          this.wrong = true
        }
      },
      goToThird(){
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (this.username.length < 4) {
          this.errormsg = 'User Name is Too short Try Again..!'
          this.wrong = true
        } else if (!this.email.match(mailformat)) {
          this.errormsg = 'Invalid Email provide a valid email..!'
          this.wrong = true
        } else if (this.password.length < 6) {
          this.errormsg = 'week password try again..!'
          this.wrong = true
        }else{
          this.first = true
          this.second = true
          this.third = false
        }
        
      },
      goBack: function () {
        this.first = false
        this.second = true
        this.third = true
      },
      goBackSec(){
        this.first = true
        this.second = false
        this.third = true
      },
      nameVal: function () {

      },
      validation: function (e) {
        if (this.fileUrl == '') {
          this.errormsg = 'Please uplode a file'
          this.wrong = true
        } else {
          addUser(this.email, this.password, this.fname, this.lname, this.username, this.des,this.fileUrl, this.$router)
        }
        e.preventDefault()
      },

      userProfile(e) {
        this.fileUrl = e.target.files[0]
      }

    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .first-slide,
  .second-slide {
    transition: 100s;
  }

  .banyan-logo-lol {
    height: 100px;
  }

  .navbar-banyan {
    background: #F8F9FA;
    text-align: center;
  }

  .icon {
    font-size: 3.5rem;
  }


  .btn-banyan-align {
    display: flex;
    align-content: space-between;
  }

  .btn-banyan-align .btn {
    flex: 1;
  }

  .btn-banyan-align .btn:hover {
    color: rgb(90, 95, 109);
  }

  .custom-border {
    border: 1px solid whitesmoke;
    padding: 12px;
  }

  .vertical-center {
    min-height: 100%;
    /* Fallback for browsers do NOT support vh unit */
    min-height: 60vh;
    /* These two lines are counted as one :-)       */
    background: transparent;
    display: flex;
    align-items: center;
  }

  .custom-1 {
    width: 500px;
  }

  .jumbotron {
    padding-top: 5px;
    padding-bottom: 0px;
    margin-bottom: 0px;
  }

  .alert {
    text-align: center;
    margin-right: 200px;
    margin-left: 200px;
  }

  .hidden {
    display: none;
  }

</style>
