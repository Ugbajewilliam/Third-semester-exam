import { createStore } from "vuex";
import createPersistedState from 'vuex-persistedstate'

const store = createStore({
    state: {
        value: 0
    },
    mutations:{
        increment(state){
            state.value++;
            console.log("Increment mutation called. New value: " + state.value);
        },
        decrement(state){
            state.value--;
            console.log("Decrement mutation called. New value: " + state.value);
        },
        reset(state){
            state.value = 0;
            console.log("Reset mutation called. New value: " + state.value);
        },
        setValue(state, newValue){
           state.value = newValue;
           console.log("SetValue mutation called. New value: " + state.value);
        },
    },
    plugins:[createPersistedState({
    storage:window.sessionStorage,
    })
    ]
});

export default store;
