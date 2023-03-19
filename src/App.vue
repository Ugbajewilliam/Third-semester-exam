<template>
  <div>
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar/TopNav.vue";

export default {
  name: "App",
  components: {
    NavBar
  }
};
</script>





<!-- <style>

.top-nav{
 background-color: rgb(42, 42, 94);
}


.nav-button {
    border: none;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 1rem;
    border-radius: 0.5rem;
    margin: 0.5rem 0.5rem;
    cursor: pointer;
  }

  .nav-button:hover{
    transform: scale(1.1);
    background-color: rgb(19, 19, 19);
    color: white;
  }

  
</style> -->
