<template>
    <div class="home-page">
      <div class="image">
        <img src="../Views/michal-vavro-lWWI7f79Su4-unsplash.jpg" alt="My Image">
      </div>
      <h1 class="welcome">welcome to our Counter application</h1>
    </div>
</template>

<script>


export default{
    name: 'HomePage',
}
</script>

<style scoped>


.home-page{
  position: relative;
  height: 100vh;
  text-align: center;
}

.image img{
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 110vh;
  max-width: 100%;
  max-width: 100%;
  z-index: -1;
  background-position: center;
}
.welcome {
    font-size: 4rem;
    font-weight: bold;
    text-align: center;
    color: #333;
    position: relative;
    text-transform: uppercase;
    background: linear-gradient(to right, #000000, #0099FF);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: slideIn 1s ease-in-out;
    position: relative;
  z-index: 1;
  display: inline-block;
}

  
  @keyframes slideIn {
    0% {
      left: -100%;
    }
    100% {
      left: 0;
    }
  }

  @media screen and (max-width: 480px) {
  .welcome {
    font-size: 2rem;
  }
}


</style>