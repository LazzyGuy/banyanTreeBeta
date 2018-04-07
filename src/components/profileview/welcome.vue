<template>
  <div>
    <nav>
      <nav-bar></nav-bar>
    </nav>

    <div class="banyan-width">
   
    </div>

  </div>
</template>


<script>
  import Dashnav from '../dashboard/dashnav'
  export default {

    name: 'my-tour',

    data() {
      return {

      }
    },
    mounted: function () {
    },
    components: {
      'nav-bar': Dashnav
    }


  }

</script>

<style scoped>
  /* body section  */

  .banyan-width {
    height: 100vh;
    background: #000;
    color: white;
    margin-left: 60px;
  }

  /* @media screen and (max-width: 1000px) {
   .banyan-width{
     width: 93%;
   }
}
@media screen and (max-width: 450px) {
   .banyan-width{
     width: 86%;
   }
} */

  /* body section ends  */

/* #one{
  margin-top: 10px;
  display: block;
  margin-left: 0px;
  width: 0px;
}
#two,
#three,
#four
{
  margin-top: 80px;
  display: block;
  margin-left: 0px;
  width: 0px;
}
#five{
  margin-top: 230px;
  margin-left: 0px;
  width: 0px;
  display: block;
}
.banyan-hiddin-box{
  visibility: hidden;
}
@media screen and (max-width: 500px) {
 #one{
  margin-top: 30px;
}
#two,
#three,
#four
{
  margin-top: 50px;
 
}
#five{
  margin-top: 290px;
} 
} */
.demo{
   margin-top: 20px;
}
.nav{

  height: 100%;
    width: 60px;
}
</style>
