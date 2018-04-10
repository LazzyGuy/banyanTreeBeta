<template>
<div class="main-body">
    <header>
        <nav class="navbar bg-dark text-light">
            <p class="navbar-brand">
                Graphic Era Chat
            </p>
        </nav>
    </header>
    
    <section>

        <div class="fromOther">
            <div class="message" v-for="ms in msgFromOther" v-bind:key="ms.id">
                <div class="small-body">
                    <p class="name">{{ms.name}}</p>
                    <p class="name">{{ms.msg}}</p>
                </div>
            </div>
        </div>

        <div class="myMsg">
            <div class="message-fromme" v-for="ms in myMsg" v-bind:key="ms.id">
                <div class="small-body-me">
                    <p class="name">{{ms.msg}}</p>
                </div>
            </div>
        </div>

    </section>
    
    <footer>
        <form>
            <input class="form-control" type="text" v-model="msg">

           <div class="lol">
                <button @click="sendMsg" class="btn"></button>
           </div>
        </form>
    </footer>

</div>
</template>

<script>
export default {

    methods:{

        sendMsg(){
           this.myMsg.push({msg: this.msg})
           this.msg = ''
        }

    },
    data(){
        return{
            msg: '',
            msgFromOther:[
                {
                    id: 0,
                    name: 'suraj',
                    msg: 'hello therehow are you'
                },
                {
                    id: 1,
                    name: 'asd',
                    msg: 'alnada flana you'
                },
                {
                    id: 2,
                    name: 'asdfa',
                    msg: 'howdid'
                },
                {
                    id: 3,
                    name: 'awer',
                    msg: 'therehow are you'
                }
            ],
            myMsg:[],
            myMsgLen: false
        }
    }
  
}
</script>

<style scoped>

.main-body{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 60px;
    right: 0;
}

/* header  */
header{
}
.navbar{
    height: 50px;
    opacity: 0.5;
}

/* header ends */
footer{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 80px;
    margin-left: 60px;
}

form{
    width: 100%;
    display: flex;
    justify-content: center;
    padding-left: 200px;
}

form input{
    flex-basis: 80%;
    border-radius: 50px;
    border: none;
    opacity: 0.8;
    font-size: 20px;
}

form .lol{
    flex-basis: 20%;
}
form button{
    width: 40px;
    height: 40px;
    margin-left: 30px;
    background: url('../../../assets/send-icon.png') no-repeat;
    background-size: cover;
}
@media (max-width: 1000px){
    form{
        padding-left: 10px;
    }
    form button{
        margin-left: 0px;
    }
} 
/* section  */
section{
    background: transparent;
    height: 100%;
    display: flex;
    flex-wrap: nowrap;
    flex-shrink: inherit;
    overflow: scroll;
}
section .fromOther{
    height: 100%;
    flex: 1;
}
section .myMsg{
    height: 100%;
    flex: 1;
}
.small-body{
    background:whitesmoke;
    display: inline-block;
    margin: 20px;
    border-radius: 10px;
}
.small-body p{
    margin: 0;
    padding: 2px;
}
.message-fromme{
    text-align: right;
}
.small-body-me{
    background:lightgreen;
    display: inline-block;
    margin: 20px;
    border-radius: 10px;
}
.small-body-me p{
    margin: 0;
    padding: 2px;
}

.name{
    line-break: auto;
}

/* section ends  */
</style>
