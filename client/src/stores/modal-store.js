import { defineStore } from 'pinia'


export const useModalStore = defineStore('modal', {
  state: () =>({
    current: null,
    active: false,
    timeOut: 5000,                                                                                                 //👈 indicates whether the model is visible or not 
    authForm: null
  }),

  actions:{
  
    toggleModal(modal = ''){
      this.active  = !this.active
      if(this.current && !this.active) setTimeout(_ => this.current = this.authForm = null, 400)
      else this.current = modal
    },

    setAuthModal(name){
      this.authForm = name
    },

    mountAuthModal(event, modal){
      if(event.target.name ){
        this.toggleModal(modal)
        this.setAuthModal(event.target.name)
      }
    },

    closeLoadingModal(){
      setTimeout(_ => this.toggleModal(), this.timeOut)
    }



  }//actions ends here
})//store ends here