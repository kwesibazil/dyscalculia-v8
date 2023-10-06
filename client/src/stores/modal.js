import { defineStore } from 'pinia'


export const useModalStore = defineStore('modal', {
  state: () =>({
    current: null,
    active: false,                                                                                                  //👈 indicates whether the model is visible or not 
    authForm: null,
    errorMsg: null,     
  }),

  actions:{
  
    toggleModal(){
      this.active  = !this.active
    },

    setAuthModal(name, modal='Auth'){
      this.authForm = name
      this.current = modal
    },



  }//actions ends here
})//store ends here