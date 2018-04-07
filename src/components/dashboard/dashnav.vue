<template>
  <nav>
    <ul class="nav flex-column">

      <li class="nav-item banyan-icon banyan-top-icon-icon">
        <img class="img-icon-banyan" src="../../assets/icon.png">
      </li>

      <li class="nav-item banyan-icon banyan-top-icon one" v-bind:class="{'bg-secondary': a}">
        <button class="btn btn-link banyan-icon" @click="goToHomeFront" data-toggle="tooltip" data-placement="top" title="Home">
          <i class="fas fa-home"></i>
        </button>
      </li>

      <li class="nav-item banyan-icon two" v-bind:class="{'bg-secondary': b}">
        <button class="btn btn-link banyan-icon" @click="goToClassroom" data-toggle="tooltip" data-placement="top" title="Classroom">
          <i class="fas fa-comments"></i>
        </button>
      </li>

      <li class="nav-item banyan-icon three" v-bind:class="{'bg-secondary': c}">
        <button class="btn btn-link banyan-icon" @click="goToHomeGang" data-toggle="tooltip" data-placement="top" title="gang">
          <i class="fas fa-hand-peace"></i>
        </button>
      </li>

      <li class="nav-item banyan-icon four" v-bind:class="{'bg-secondary': d}">
        <button class="btn btn-link banyan-icon" @click="goToHomeTeachZone" data-toggle="tooltip" data-placement="top" title="Teacher zone">
          <i class="fas fa-assistive-listening-systems"></i>
        </button>
      </li>
    </ul>

    <ul class="nav flex-column x-logout five">
      <li class="nav-item">
        <button class="btn btn-link x-logout-color" @click="showMyProfile"><i class="far fa-user"></i></button>
      </li>
      <li class="nav-item">
        <button class="btn btn-link x-logout-color" @click="showSetting"><i class="fas fa-cogs"></i></button>
      </li>
      <li class="nav-item">
        <button class="btn btn-link x-logout-color" @click="logoutUser"><i class="fas fa-sign-out-alt"></i></button>
      </li>
    </ul>
  </nav>
</template>


<script>

import {logout} from '../../backend/logout'
  export default {
    name: 'dashnav',

    data() {
      return {
      }
    },

    props:['a','b','c','d'],

    created(){
    },

    methods: {
      goToHomeFront: function () {
        this.$router.push('/home')
      },
      goToHomeTeachZone: function () {
        this.$router.push('/teachzone')
      },
      goToClassroom: function () {
        this.$router.push('/classroom')
      },
      goToHomeGang: function () {
        this.$router.push('/gang')
      },
      logoutUser: function(){
        logout(this.$router)
      },
      showSetting: function(){
        this.$router.push("/settings")
      },
      showMyProfile: function(){
        this.$router.push("/me")
      }
    }
  }

</script>


<style scoped>
  .banyan-icon {
    font-size: 1.7rem;
    margin-top: 20px;
  }
  .banyan-top-icon{
    margin-top: 0;
  }
  .banyan-top-icon-icon{
    padding-top: 0px;
  }
  .img-icon-banyan{
    height: 85px;
    padding: 10px;
    padding-left: 5px;
    width: 70px;
  }

  nav {
    height: 100%;
    width: 60px;
    position: fixed;
    z-index: 10;
    left: 0;
    top: 0;
    background: whitesmoke;
    background-size: cover;
    overflow-x: hidden;
  }

  @media screen and (max-width: 500px) {
    nav {
      width: 60px;
    }
  }

  .banyan-icon{
    color: springgreen;
  }

  @media screen and (max-width: 500px) {
    .banyan-icon {
      font-size: 1.7rem;
      margin-top: 0px;
      padding-top: 10px;
      padding-bottom: 10px;
    }
    .x-logout-color{
  color: black;
  font-size: 1.2rem;
}
  }

  .dropup{
      width: 50px;
  }


.x-logout {
  position: absolute;
  bottom: 0;
}

.x-logout-color{
  color: black;
  font-size: 1.5rem;
}
</style>
