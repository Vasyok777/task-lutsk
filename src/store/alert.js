import { defineStore } from 'pinia';

export const useAlertStore = defineStore('alert', {
  state: () => ({
    message: null,
  }),
  actions: {
    setMessage(payload){
      this.getMessage(payload);
      setTimeout(()=>{
        this.clearMessage()
      }, 5000)
    },
    getMessage(state){
      this.message = state
    },
    clearMessage(){
      this.message = null
    }
  }
})