<template>
   <div class="card">
      <h2>
        <slot name="title"></slot>
      </h2>
      <p>
        <slot name="description"></slot>
      </p>
   </div>
</template>

<script>

export default {
}
</script>

<style scoped>
a {
  text-decoration: none;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
a:hover {
  color: inherit;
}
.card {
  -ms-flex: 1 1 1%;
  flex: 1 1 1%;
  margin: 15px;
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
  padding: 40px 20px 40px 20px;
  cursor: pointer;
  background-color: #fff;
  border-radius: 4px;
  opacity: .9;
  opacity: box-shadow .8;
  box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
  transition-property: color, background-color, box-shadow, transform;
  transition-duration: 0.15s;
}
.card > h2 {
  margin: 0 0 5px !important;
  color: black;
  text-transform: uppercase;
  font-size: 17px;
  line-height: 26px;
  font-weight: 600;
  margin: 10px;
  letter-spacing: 0.025em;
}
.icon img, .icon svg {
  position: absolute;
  width: 80px;
  height: 80px;
  left: 5px;
  border-radius: 50%; 
  top: calc(50% - 65px);
}
.card > p {
  margin: 5px 0 0;
  font-weight: 400;
  font-size: 17px;
  line-height: 26px;
  color: #6b7c93;
}
.card:hover {
  color: #32325d !important;
  transform: translateY(-5px);
  box-shadow: 0 18px 35px rgba(50, 50, 93, 0.1), 0 8px 15px rgba(0, 0, 0, 0.07);
  opacity: 1;
  
}
.card:hover > h2 {
  color: #32325d !important;
}
.card:active {
  transform: translateY(5px);
  box-shadow: 0 11px 20px rgba(50, 50, 93, 0.1), 0 6px 11px rgba(0, 0, 0, 0.08);
  background: #eaeaea;
  opacity: 1;
}
</style>