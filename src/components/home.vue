<template>
  <div class="main">
    <nav>

      <div class="logo">
        <img src="../assets/midlogo.png" alt="">
      </div>

      <div class="sidemenu">
        <a class="btn-link" href="#whybanyantree" @click="showAnime">Why banyanTree?</a>
        <router-link class="btn-link" to="/signup">Join Us</router-link>
        <a class="btn-link" href="#aboutus">About Us</a>
        <router-link class="btn-btn" to="/login">Your Classroom</router-link>
      </div>


      <!-- menu button -->
      <div class="container-suraj" @click="changeBar">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </div>
      <!-- menu button ends -->

      <!-- navigation menu in mobile -->
      <div id="myNav" class="overlay" v-bind:style="{width: close}">

        <!-- Button to close the overlay navigation -->
        <div class="nav-logo-banyan">
          <img src="../assets/mainlogo.png" alt="">
        </div>
        <a href="javascript:void(0)" class="closebtn" @click="closeNav">&times;</a>

        <!-- Overlay content -->
        <div class="overlay-content">
          <ul>
            <li>
              <a class="btn btn-link-over" href="#whybanyantree">Why banyanTree?</a>
            </li>
            <li>
              <router-link class="btn btn-link-over" to="/signup">Join Us</router-link>
            </li>
            <li>
              <a class="btn btn-link-over " href="#aboutus">About Us</a>
            </li>
            <li>
              <router-link class="btn btn-down btn-success btn-lg btn-block text-white btn-btn-over" to="/login">Classroom login</router-link>
            </li>
          </ul>


        </div>

      </div>


    </nav>
    <!-- navigation menu ends -->

    <div class="motto-section">
      <div class="message1">
        <h2 class="teach">TEACH</h2>
        <h2 class="learn">LEARN</h2>
        <h2 class="connect">CONNECT</h2>
      </div>

      <div class="message2">
        <h2>
          Join
          <span class="black"> Banyan </span>
          <span class="green"> tree </span> in the quest of getting most out of the traditional class.
        </h2>

        <button @click="gotoSignup" class="show-btn">Join Now</button>
      </div>
    </div>

    <div class="whybanyantree" id="whybanyantree" >
      <div class="title-why">
        <h1>Joining <b>STUDENT</b> and <b>Teacher</b> together.</h1>
      </div>
        <div class="animation">
          <div class="student">
            <img src="../../static/student.png" alt="student">
          </div>
          <div class="logo">
            <img src="../assets/icon.png" v-bind:class="{'anime-logo': whyAnime}" alt="logo">
          </div>
          <div class="teacher">
            <img src="../../static/teacher.png" alt="teacher">
          </div>
        </div>
    </div>

    <div class="aboutus" id="aboutus">
      <div class="intro">
        <h1>Our Team </h1>
      </div>
      <div class="team">
        <div class="sid">
          <img src="../assets/profile/me1.jpg" alt="">
          <h4>Siddhart Narwani</h4>
          <p>Markting planner</p>
        </div>
        <div class="suraj">
          <img src="../../static/suraj.jpg" alt="">
          <h4>Suraj Negi</h4>
          <p>Lead Developer</p>
        </div>
        <div class="ravi">
          <img src="../../static/ravi.jpg" alt="">
          <h4>Ravi Martolia</h4>
          <p>Lead Designer</p>
        </div>
      </div>
    </div>


    <footer class="container-fluid">
      <div class="form-contact">
        <form>
          <div class="form-group">
            <input type="email" class="form-control" placeholder="Your email@address" required>
            <button class="btn">Join our newsletter</button>
          </div>
        </form>
      </div>

      <div class="socialmedia">
        <div class="icon">
          <i class="fab fa-twitter"></i>
          <i class="fab fa-medium"></i>
          <i class="fab fa-linkedin"></i>
        </div>
      </div>

    </footer>

  </div>
</template>




<script>
  // import {forHome} from '../backend/init'
  export default {
    name: 'home',
    data() {
      return {
        close: '',
        whyAnime: false
      }
    },
    methods: {
      changeBar: function () {
        this.close = '100%'
      },
      closeNav: function () {
        this.close = '0%'
      },
      gotoSignup: function () {
        this.$router.push({
          name: 'signup'
        })
      },
      showAnime() {
        this.whyAnime = !this.whyAnime;
      }
    },
    created() {
      // forHome()
    }
  }

</script>

<style scoped>
body{
  background: #fbfbfb;
}
  .main {
    overflow-x: hidden;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    height: 100vh;
    background: linear-gradient(rgba(113, 129, 113, 0.3), rgba(75, 78, 75, 0.3)), url('../assets/bg3.jpeg') no-repeat;
    background-size: cover;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }


  nav {
    height: 70px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
    background: #fbfbfb;
  }

  .logo {
    padding: 10px;
    padding-left: 100px;
    display: inline;
  }

  .logo img {
    height: 70px;
    width: 200px;
  }

  /* side menu */

  .sidemenu {
    display: inline-block;
    float: right;
    margin: 10px;
    margin-top: 30px;
    padding-right: 30px;
  }

  .btn-link,
  .btn-btn {
    color: springgreen;
    text-decoration: none;
    margin: 10px;
    padding: 20px;
    font-weight: 400;
    letter-spacing: 0.15rem;
    font-size: 15px;
    text-align: center;
  }

  .btn-btn {
    color: springgreen;
    border: 1px solid springgreen;
    padding: 10px;
    border-radius: 20px;
  }

  .btn-btn:hover {
    color: #a09ca0;
    border: 1px solid #a09ca0;
  }

  /* TODO: HOVER EFFECT NOT WORKING WHEN DEPLOYED */

  .btn-link:hover {
    color: #a09ca0;
    /* border-bottom: 1px solid springgreen; */
  }

  @media screen and (max-width: 1100px) {
    nav {
      height: 60px;
    }
    .logo {
      padding-left: 15px;
    }
    .sidemenu {
      display: none;
    }
  }

  /* menu start  */

  .container-suraj {
    display: none;
    cursor: pointer;
  }

  .bar1,
  .bar2,
  .bar3 {
    width: 30px;
    height: 4px;
    background-color: #17dd17b0;
    margin: 5px 0;
    transition: 0.4s;
  }

  /* media querys for menu */

  @media screen and (max-width: 1100px) {
    .container-suraj {
      display: inline-block;
      float: right;
      margin-top: 25px;
      ;
      padding-right: 20px;
    }
  }

  /* overlay */

  /* The Overlay (background) */

  .openNav {
    width: 100%;
  }

  .closeNav {
    width: 0%;
  }

  .overlay {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    background: url('../assets/winterbg.jpg') no-repeat;
    background-size: cover;
    overflow: hidden;
    overflow-x: hidden;
    overflow-y: auto;
    transition: 0.5s;
  }

  /* Position the content inside the overlay */

  .overlay-content ul {
    display: inline-block;
    margin-top: 90px;
    width: 100%;
  }

  .overlay-content ul li {
    display: list-item;
    padding: 5px;
    padding-left: 30px;
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }

  .overlay .btn-link-over,
  .btn-btn-over {
    text-decoration: none;
    font-size: 25px;
  }

  .overlay .btn-link-over:hover,
  .overlay .btn-link-over:focus {
    color: peru;
  }

  /* Position the close button (top right corner) */

  .closebtn {
    position: absolute;
    margin-top: -40px;
    right: 0;
    top: 0;
  }

  .nav-logo-banyan {
    position: absolute;
    left: 0;
    top: 0;
  }

  .btn-down {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin-bottom: 5px;
    border-radius: 0;
    align-self: center;
  }

  .nav-logo-banyan img {
    height: 60px;
  }

  .overlay .closebtn {
    float: right;
    font-size: 80px;
    color: black;
  }

  /* front content */

  /* page 1  */

  .motto-section {
    display: flex;
    align-content: space-between;

  }

  .message1 {
    height: 84vh;
    flex: 1;
    padding: 0px;
    margin-top: 120px;
  }

  .message1 h2 {
    font-size: 130px;
    width: 100%;
    height: 150px;
    font-weight: 800;
  }

  .message1 .learn {
    color: springgreen;
  }

  .message1 .teach {
    color: black;
  }

  .message1 .connect {
    color: black;
  }

  @media screen and (max-width: 1100px) {
    .motto-section {
      height: 89vh;
    }
    .message1 {
      display: none;
    }
  }

  .message2 {
    flex: 1;
    height: 84vh;
    text-align: center;
    padding: 10px;
  }

  .black {
    color: black;
    font-weight: 500;
  }

  .green {
    font-weight: 500;
    color: springgreen;
  }

  .message2 h2 {
    color: white;
    font-size: 25px;
    line-height: 50px;
    letter-spacing: 3px;
    font-weight: 300;
    margin-top: 200px;
  }

  .show-btn {
    padding: 10px;
    font-size: 25px;
    background: transparent;
    text-align: center;
    color: springgreen;
    border: 1px solid springgreen;

    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin-top: 50px;
  }

  .show-btn:hover {
    border: 1px solid white;
    color: white;
  }

  @media screen and (max-width: 1100px) {
    .message2 h2 {
      width: 100%;
      padding: 100px;
      padding-top: 0px;
      margin-top: 130px;
      line-height: 40px;
    }
    .show-btn {
      margin-top: 0px;
      ;
    }
  }

  @media screen and (max-width: 700px) {
    .message2 h2 {
      padding: 50px;
    }
  }

  @media screen and (max-width: 500px) {
    .message2 h2 {
      padding: 10px;
    }
    .show-btn {
      margin-top: 20px;
      ;
    }
  }

  /* /* page 1 ends */

  footer {
    height: 80vh;
    background: transparent;
    color: springgreen;
    text-align: center;
  }

  footer input {
    display: inline-block;
    padding: 10px;
    margin-top: 50px;
    border-radius: 20px;
    width: 50vh;
  }

  footer button {
    border-radius: 20px;
    padding: 10px;
    background: springgreen;
    color: whitesmoke;
    display: inline-block;
  }

  footer button:hover {
    background: rgb(17, 80, 49);
  }

  .form-contact {
    padding-top: 20px;
  }

  .socialmedia {
    font-size: 40px;
  }

  .socialmedia .icon {
    padding-top: 70px;
    letter-spacing: 150px;
  }

  @media screen and (max-width: 560px) {
    footer input {
      width: 100%;
    }
    footer button {
      display: inline-block;
      margin-top: 20px;
    }
    .socialmedia .icon {
      padding-top: 70px;
      letter-spacing: 50px;
    }
  }

  /* whybanyantree section */

  .whybanyantree {
    min-height: 100vh;
    min-width: 100%;
    background: #fbfbfb;
  }

  .animation {
    min-height: 85vh;
    min-width: 100%;
    position: relative;
    bottom: 0;
    left: 0;
    right: 0;    
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
  }

  .animation .student img {
    height: 300px;
    width: 400px;
    animation: colse 6s infinite;
  } 

  @keyframes colse {
    to{
      margin-left: 100px;
    }form{
      margin-left: -200px;
    }
  }



  .animation .logo img {
    height: 200px;
    width: 150px;
    margin-top: -300px;
  }
  .anime-logo{
    animation: float 2s 0.5ms;
  }
  @keyframes float {
    from{
      margin-top: -1000px;
      transform: rotate(0deg);
    }
    to{
      margin-top: 20px;
      transform: rotate(360deg);
    }
  }

  .animation .teacher img {
    height: 300px;
    width: 300px;
    animation: colse2 6s infinite;
  }
  @keyframes colse2 {
    to{
      margin-right: 100px;
    }form{
      margin-right: -200px;
    }
  }

  .title-why{
    position: relative;
    top: 100px;
    left: 0;
    right: 0;
    min-width: 100%;
    text-align: center;
  }
  .title-why h1{
    font-size: 50px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
  .title-why b{
    color: grey;
  }

  /* about us section */

  .aboutus {
    min-height: 100vh;
    text-align: center;
    background: #fbfbfb;
    font-family: Verdana, Geneva, Tahoma, sans-serif;    
  }
  .intro h1{
    min-width: 100%;
    text-align: center;
    font-size: 45px;
    font-weight: lighter;
    color: gray;
    position: relative;
    top: 100px;
    left: 0;
    right: 0;
  }
  .team{
    min-width: 50%;
    margin: 200px 100px;
    padding: 20px 100px;
    display: flex;
    justify-content: space-around;
    align-content: center;
  }
  .team img{
    height: 150px;
    width: 150px;
    border-radius: 100%;
    transition: 2s;
    /* box-shadow: 2px 3px 5px 0px  #242424 */
  }
  .team img:hover{
    transform: scale(1.1);
  }
  .team h4{
    color: #242424;
    font-weight: 400;
    line-height: 50px;
  }

  .team p{
    color: #a09ca0;
    font-size: 20px;
  }




</style>
