<template>
  
  <div class="card">
      <h2>
          <slot name="title"></slot>
      </h2>

      <form>
          <slot name="input"></slot>
      </form>

      <h2>
          <slot name="title2"></slot>
      </h2>  
      <form>
          <slot name="input2"></slot>
      </form>
  </div>

</template>


<script>
export default {
  
}
</script>

<style scoped>
*{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.card {
  -ms-flex: 1 1 1%;
  flex: 1 1 1%;
  margin: 5px;
  margin-left: 20px;
  margin-right: 80px;
  z-index: 499;
  font-family: Roboto;
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-pack: center;
  justify-content: center;
  overflow: hidden;
  padding: 20px 20px 20px 20px;
  cursor: pointer;
  background-color: #fff;
  border-radius: 4px;
  opacity: box-shadow .8;
  box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
  transition-property: color, background-color, box-shadow, transform;
  transition-duration: 0.15s;
}
.card > h2 {
  margin: 0 0 5px !important;
  color: grey;
  text-transform: uppercase;
  font-size: 15px;
  margin: 10px;
  letter-spacing: 0.025em;
}
.card:hover {
  color: #32325d !important;
  transform: translateY(-5px);
  box-shadow: 0 18px 35px rgba(50, 50, 93, 0.1), 0 8px 15px rgba(0, 0, 0, 0.07);
}
.card:active {
  transform: translateY(5px);
  box-shadow: 0 11px 20px rgba(50, 50, 93, 0.1), 0 6px 11px rgba(0, 0, 0, 0.08);
  background: #eaeaea;
}

input{
    border-radius: 0px;
    padding: 10px;
    background: transparent;
}
</style>
