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
        <template slot="title">{{user.name}}</template>
        <template slot="cog">{{user.school}}</template>
        <template slot="about">{{user.about}}</template>

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
        profileImage: 'https://avatars3.githubusercontent.com/u/25266614?s=400&u=771e830e8a5b994b14e84208b8fdea62c732b282&v=4',
        user: {
          name: 'Suraj negi',
          age: 21,
          school: 'Graphic Era Hill',
          about: 'Hello my name is suraj negi i am a student of graphic era hill university.'
        }
      }
    },

    components: {
      'nav-bar': Dashnav,
      'ca-rd': Card
    }

  }

</script>

<style scoped>
  .main-banyan {
    margin-left: 60px;
  }

  /* .cover-image img{

  height: 40vh;
  width: 100%;
} */

</style>
