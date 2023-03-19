<template>
  <div class="counter-Container" :class="theme">
    <h1 class="counter-title" >Counter <span>App</span></h1>
    <div class="current-value">Current value: {{ counter.state.value }}</div>

<div class="button-container">
<button class="counter-button counter-button-increment " @click="counter.increment()">+</button>
    <button class="counter-button counter-button-reset" @click="counter.reset()">Reset</button>
    <button class="counter-button counter-button-decrement" @click="counter.decrement()">-</button>
</div>

    <div class="input-container">
      <label for="counter-input">set counter input:</label>
       <input id="counter-input" type="number" v-model="newValue" @keydown.enter="counter.setValue(newValue)">
    <button class="counter-button counter-button-set" @click="counter.setValue(newValue)">Set value </button>
    </div>
   
    <button class="toggle-theme-button" @click="toggletheme">{{ theme === 'light' ? 'Dark' : 'Light' }} Mode</button>
  </div>
</template>

<script>
import { ref } from 'vue';
import useCounter from '@/composables/useCounter';

export default {
  name: 'CounterApp',
  setup() {
    const counter = useCounter();  
    const theme = ref('light')

const toggletheme = ()=>{
  theme.value = theme.value === 'light'? 'dark' : 'light'
}

    return{
      counter,
     theme,
     toggletheme
    }
  },
}
</script>


<style scoped>
.counter-Container{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: none;
  margin: 0 auto;
  height: 100vh;
  margin-top: 0;
  padding-top: 0.5rem;
}

.counter-Container.light{
  background-color: #fff;
  color: #000;
}

.counter-Container.dark{
  background-color: #000;
  color: #fff;
}


.counter-title{
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: white;
  background-color: rgb(19, 19, 19);
  text-align: center;
  border: 2px solid black;
  border-radius: 0.5rem;
  padding: 1rem;
}

.counter-title span {
  font-weight: bold;
  color: #808080;
}

.current-value{
  margin-bottom: 1rem;
  font-size: 3rem;
}

.button-container{
  display: flex;
  gap: 1rem;
}

.counter-button{
  color: white;
  background-color: rgb(19, 19, 19);
  border-radius: 0.5rem;
  cursor: pointer;
  padding: 1rem;
  font-size: 1rem;
  border: none;
  transition: all 0.2s ease-in-out;
  margin-bottom: 1rem;
}

.counter-button:hover{
  transform: scale(1.1);
}

.counter-button:active {
  transform: scale(0.9);
}

.counter-button-increment{
   background-color: #4CAF50;
}

.counter-button-decrement{
   background-color:#f44336;
}

.counter-button-reset{
   background-color: #808080;
}

.input-container{
gap: 1rem;
display: flex;
align-items: center;
margin-top: 1rem;
}

.input-container label{
  font-size: 1.5rem;
  font-weight: bold;
}

.input-container input{
  border-radius: 0.5rem;
  padding: 0.5rem;
  border: 2px solid black;
}

.input-container button{
  border: none;
  font-size: 1rem;
  cursor: pointer;
  width: 100%;
  border-radius: 0.5rem;
  background-color: #4CAF50;
  color: white;
  transition: all 0.2s ease-in-out;
}

@media (max-width: 768px) {
    .input-container button {
      font-size: 0.8rem; /* decrease the font size */
      padding: 0.5rem; /* decrease the padding */
    }
  }


.input-container button:hover{
  transform: scale(1.1);
}
</style>
