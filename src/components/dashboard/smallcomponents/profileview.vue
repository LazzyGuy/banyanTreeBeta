<template>
   <div class="card">
      <div class="icon">
        <slot name="image"></slot>
      </div>
      <h2>
        <slot name="title"></slot>
      </h2>
      <h6>
        <slot name="cog"></slot>
      </h6>
      <p>
        <slot name="about"></slot>
      </p>
   </div>
</template>

<script>

export default {
  props: ["url"]
};
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
  margin-left: 10%;
  margin-right: 10%;
  z-index: 499;
  text-align: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 20px;
  position: relative;
  height: 500px;
  -ms-flex-pack: center;
  overflow: hidden;
  padding: 10px 10px 10px 10px;
  background: transparent;
  color: steelblue;
  border-radius: 4px;
  opacity: box-shadow .8;
  box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
  transition-property: color, background-color, box-shadow, transform;
  transition-duration: 0.15s;
}
.icon img, .icon svg {
  width: 200px;
  height: 200px;
  top: 0;
  border-radius: 50%; 
}
@media screen and (max-width: 600px) {
    .icon img, .icon svg {
  width: 150px;
  height: 150px;
    }
}

.card p{
    color: whitesmoke;
    font-size: 15px;
}

h2{
  color: whitesmoke;
}

h6{
  color: whitesmoke;
}


.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 18px 35px rgba(50, 50, 93, 0.1), 0 8px 15px rgba(0, 0, 0, 0.07);
}

.card:active {
  transform: translateY(5px);
  box-shadow: 0 11px 20px rgba(50, 50, 93, 0.1), 0 6px 11px rgba(0, 0, 0, 0.08);
  background: #eaeaea;
}
</style>