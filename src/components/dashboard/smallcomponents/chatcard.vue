<template>
   <div class="card">
      <h2>
        <slot name="name"></slot>
      </h2>
      <p>
        <slot name="msg"></slot>
      </p>
   </div>
</template>

<script>

export default {
}
</script>

<style scoped>

.card {
  font-family: Roboto;  
  justify-content: center;
  overflow: hidden;
  background-color: #fff;
  border-radius: 4px;
  opacity: .9;  
  margin: 10px;
  margin-top: 0px;
  margin-bottom: 20px;
  width: auto;
  opacity: box-shadow .8;
}
.card > h2 {
  margin: 0 0 5px !important;
  color: black;
  font-size: 17px;
  font-weight: 600;
  letter-spacing: 0.025em;
}

p{
    color: black;
    word-wrap: break-word;
    padding: 5px;
}

</style>