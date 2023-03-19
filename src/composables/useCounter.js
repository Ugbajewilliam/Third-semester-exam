import { useStore } from "vuex";

export default function useCounter() {
  const store = useStore();

  const MAX_VALUE = 20;
  const MIN_VALUE = 0;



  function decrement() {
    store.commit("decrement");
  }

  function reset() {
    const confirmReset = confirm("Are you sure you want to reset the counter?");
    if (confirmReset) {
      store.commit("reset");
    }
  }
  

  function increment() {
    store.commit("increment");
  }

  function setValue(newValue) {
    if (newValue >= MIN_VALUE && newValue <= MAX_VALUE) {
      store.commit("setValue", newValue);
    } else {
      alert(`Please enter a value between ${MIN_VALUE} and ${MAX_VALUE}`);
    }
  }

  return {
    increment,
    decrement,
    reset,
    setValue,
    state:  store.state
    
  };
}
