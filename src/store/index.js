import { defineStore } from 'pinia';
import {error} from '@/utils/error'
import axios from 'axios';
const TOKEN_KEY = 'jwt-token';
import { useAlertStore } from '@/store/alert';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem(TOKEN_KEY),
    currentUser: localStorage.getItem('currentUser'),
    message: null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.token
  },
  actions:{
    async login(payload){
      const storeAlert = useAlertStore();
      try{
        const url =`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.VUE_APP_FB_KEY}`
        const {data} = await axios.post(url, {...payload, returnSecureToken: true})
        this.setToken(data.idToken)
        localStorage.setItem('currentUser', JSON.stringify(payload))
        storeAlert.clearMessage()
        storeAlert.setMessage({
          value: 'You are logged in',
          type: 'primary'
        })
      }catch(e){
        storeAlert.setMessage({
          value: error(e.response.data.error.message),
          type: 'danger'
        })
        throw new Error()
      }
    },
    async register(payload){
      const storeAlert = useAlertStore();
      try{
        const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.VUE_APP_FB_KEY}`
        const { data } = await axios.post(url, {...payload, returnSecureToken: true})
        this.setToken(data.idToken)
        localStorage.setItem('currentUser', JSON.stringify(payload))
        storeAlert.setMessage({
          value: 'Congratulations, you have successfully registered',
          type: 'primary'
        })
      }catch(e){
        storeAlert.setMessage({
          value: error(e.response.data.error.message),
          type: 'danger'
        })
        throw new Error()
      }
    },
    setToken(token){
      this.token = token
      localStorage.setItem(TOKEN_KEY, token);
    },
    logout(){
      this.token = null
      localStorage.removeItem(TOKEN_KEY)
      localStorage.removeItem('currentUser')
    },
  }
});