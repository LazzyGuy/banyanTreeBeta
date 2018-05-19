<template>
  <div>
    <div class="navigation">
      <nav-bar></nav-bar>
    </div>

    <div class="main-banyan">
      <ca-rd>
        <template slot="image">
          <img v-bind:src="profileImage">
        </template>
        <template slot="title">{{name}}</template>
        <template slot="cog">{{school}}</template>
        <template slot="about">{{about}}</template>

      </ca-rd>
    </div>
  </div>
</template>


<script>
  import Dashnav from '../dashboard/dashnav'
  import Card from '../dashboard/smallcomponents/profileview'
  export default {
    name: 'me',

    data() {
      return {
        
      }
    },

    computed:{
      profileImage(){
        return this.$store.state.currentUser.profileUrl
      },
      name(){
        return this.$store.state.currentUser.name
      },
      school(){
        return this.$store.state.currentUser.school
      },
      about(){
        return this.$store.state.currentUser.description
      }
    },

    components: {
      'nav-bar': Dashnav,
      'ca-rd': Card
    }

  }

</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
  .main-banyan {
    background: url('../../assets/newbg.svg');
    height: 100vh;
    padding-top: 100px;
    padding-left: 60px;
  }

  /* .cover-image img{

  height: 40vh;
  width: 100%;
} */

</style>
