<template>
  <div>
    <div class="navigation">
      <nav-bar></nav-bar>
    </div>

    <div class="section-banyan banyan-container">
      
      <div class="display">
        <h1>Settings</h1>
        <p>Change your setting here!</p>
      </div>

      <ca-rd>
         <template slot="title">username</template>
         <template slot="input">
           <input class="form-control" v-model="user.username" type="text">
         </template>
      </ca-rd>

      <ca-rd>
         <template slot="title">First name</template>
         <template slot="input">
           <input class="form-control" v-model="user.fname" type="text">
         </template>
         <template slot="title2">last name</template>         
         <template slot="input2">
           <input class="form-control" v-model="user.lname" type="text">
         </template>
      </ca-rd>

      <ca-rd>
         <template slot="title">Description</template>
         <template slot="input">
           <input class="form-control" v-model="user.des" type="text">
         </template>
      </ca-rd>

      <div class="button-group">
        <button class="btn btn-success" @click="save">SAVE</button>
        <button class="btn btn-danger" @click="reset">CANCEL</button>
      </div>

    </div>
  </div>
</template>


<script>
import Dashnav from '../dashboard/dashnav'
import Card from '../dashboard/smallcomponents/settingcard'

export default {

  data(){
    return{
      user: {
        username: '',
        lname: '',
        fname: '',
        des: ''
      }
    }
  },

  
  components:{
    'nav-bar': Dashnav,
    'ca-rd': Card
  },


  methods:{
    save: function(){
      console.log(this.user.username);
      console.log(this.user.lname);
      console.log(this.user.fname);
      console.log(this.user.des);
    },
    reset: function(){
      console.log('cancel');
      
    }
  }



}
</script>

<style scoped>
*{
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.title{

}
.section-banyan{
  margin-left: 60px;
}
.banyan-container{
  text-align: left;
  height: 100%;
  top: 0;
  background: lightskyblue;
  width: 100%;
  overflow: hidden;
  position: fixed;
}
.display,
.button-group{
  margin-left: 20px;
}
.display{
  color: gray;
}

.button-group{
  text-align: right;
  padding: 10px;
  margin-right: 80px;
}
.button-group button{
  padding: 10px;
  padding-left: 30px;
  padding-right: 30px;
}


</style>
