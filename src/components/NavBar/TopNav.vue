
<template>
  <nav class="top-nav">
    <div class="nav-buttons">
      <router-link to="/">
        <button class="nav-button home">Home</button>
      </router-link>
      <router-link to="/counter">
        <button class="nav-button counter">Counter</button>
      </router-link>
    </div>
  </nav>
</template>

<script>

export default {
  name: "TopNav"
};
</script>

<style>
.top-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: #fff;
  height: 60px;
  padding: 0 20px;
}

.nav-buttons {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.nav-button {
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 1.2rem;
  margin-right: 1.5rem;
 cursor: pointer;
 border-radius: 0.3rem;
 text-decoration: none;
 
 transition: background-color 0.3s ease-in-out;
}

.nav-button:hover{
  transform: scale(1.1);

  color: white;
}


.counter {
  background-color: #28a745;
  color: #fff;
}

.nav-button.home {
  font-weight: bold;
}
</style>
