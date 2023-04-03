import { defineStore } from 'pinia';
import axios from '@/axios/request'
import {useAuthStore} from '@/store'
import {useAlertStore} from '@/store/alert'

export const useRequestStore = defineStore('request', {
  state: () => ({
    requests: []
  }),
  actions: {
    async create(payload){
      const storeAlert = useAlertStore();
      try{
        const storeUser = useAuthStore();
        const token = storeUser.token;
        console.log(token);
        const { data } = await axios.post(`/users.json?auth=${token}`, payload)
        this.addRequest({...payload, id: data.name})
        storeAlert.setMessage({
          value: 'Заявка успішно створена',
          type: 'primary',
        })
      }catch(e){
        storeAlert.setMessage({
          value: e.message,
          type: 'danger',
        })
      }
    },
    async loadById(id){
      const storeAlert = useAlertStore();
      try{
        const storeUser = useAuthStore();
        const token = storeUser.token;
        const { data } = await axios.get(`/users/${id}.json?auth=${token}`)
        console.log(data);
        return data
      }catch(e){
        storeAlert.setMessage({
          value: e.message,
          type: 'danger',
        })
      }
    },
    async remove(id){
      const storeAlert = useAlertStore();
      try{
        const storeUser = useAuthStore();
        const token = storeUser.token;
        await axios.delete(`/requests/${id}.json?auth=${token}`)
        storeAlert.setMessage({
          value: 'Заявка була видалена',
          type: 'primary'
        })
      }catch(e){
        storeAlert.setMessage({
          value: e.message,
          type: 'danger',
        })
      }
    },
    async update(request){
      const storeAlert = useAlertStore();
      try{
        const storeUser = useAuthStore();
        const token = storeUser.token;
        await axios.put(`/users/${request.id}.json?auth=${token}`, request)
        storeAlert.setMessage({
          value: 'Заявка обновилася',
          type: 'primary'
        })
      }catch(e){
        storeAlert.setMessage({
          value: e.message,
          type: 'danger',
        })
      }
    },
    setRequests(requests){
      this.requests = requests
    },
    addRequest(request){
      this.requests.push(request)
    }
  }
}) 