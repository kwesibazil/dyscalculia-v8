import { defineStore } from 'pinia'
import {useModalStore} from './modal-store'
import axiosInstance from '@/helpers/axiosInstance'

export const useAuthStore = defineStore('auth', {
  state: () =>({
    signUpErr: false,
    signInErr: false
  }),


  actions:{
    resetErrMsg(){
      if(this.signInErr || this.signUpErr)
        this.signUpErr = this.signInErr = false
    },

    async userLogin(email, pwd){
      const modal = useModalStore()
      try{
        console.log('user login');
        modal.current = 'Loading'
        // const res = axiosInstance.get('auth/register', {email, pwd})
        // console.log(res.data);
      }
      catch(err){this.signUpErr = true}
      finally{modal.closeLoadingModal()}
    },


    async userRegistration(email, pwd){
      const modal = useModalStore()
      try{
        console.log('user register');
        modal.current = 'Loading'
        // const res = axiosInstance.get('auth/register', {email, pwd})
        // console.log(res.data);
      }
      catch(err){this.signUpErr = true}
      finally{modal.closeLoadingModal()}
    }


  }//actions ends here
})//store ends here
