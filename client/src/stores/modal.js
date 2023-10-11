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
      if(!this.active)setTimeout(_ => this.authForm = this.current = null, 700 )
    },

    setAuthModal(name, modal){
      this.authForm = name
      this.current = modal
    },

    showAuthModal(event, modal){
      if(event.target.name){
        this.setAuthModal(event.target.name, modal)
        this.toggleModal()
      }
    }



  }//actions ends here
})//store ends here