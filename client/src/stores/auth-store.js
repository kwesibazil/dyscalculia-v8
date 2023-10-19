import { defineStore } from 'pinia'
import {useModalStore} from './modal-store'

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
        console.log(email,pwd);
        console.log('user login');
        modal.loading = true
      }
      catch(err){
        this.signInErr = true
      }
      finally{
        setTimeout(_ => {
          modal.loading = false
          console.log('fetch complete');
        }
        , 2000)
      }
    },



    async userRegistration(email, pwd){
      const modal = useModalStore()
      try{
        console.log(email,pwd);
        console.log('user register');
        modal.loading = true
      }
      catch(err){
        this.signUpErr = true
      }
      finally{
        setTimeout(_ => {
          modal.loading = false
          console.log('fetch complete');
        }
        , 2000)
      }
    }
  }//actions ends here
})//store ends here
