<template>
  <div id="authTab" class="d-flex">
    <button @click="[setAuthModal('signUp'), resetErrMsg()]" :class="{'btn--current': authForm == 'signUp'}" class="col-6 btn btn-dark opacity-50 py-2 py-sm-3" type="button">Sign Up</button>
    <button @click="[setAuthModal('signIn'), resetErrMsg()]" :class="{'btn--current': authForm == 'signIn'}" class="col-6 btn btn-dark opacity-50 py-2 py-sm-3" type="button">Sign In</button>
  </div>
</template>



<script setup>
  import { storeToRefs } from 'pinia'
  import {useAuthStore} from '@/stores/auth-store'
  import { useModalStore } from '@/stores/modal-store';
  const {authForm} = storeToRefs(useModalStore())
  const {setAuthModal} = useModalStore()
  const {resetErrMsg} = useAuthStore()
</script>



<style scoped>
  .btn{
    opacity: 60%;
    border-radius: 0;
  }

  .btn--current, .btn--current:hover, .btn--current:active, .btn--current:focus {
    color: black;
    font-weight: bolder;
    border: 1px solid white;
    background-color: transparent;
    border-top: 1px solid #6c757d6b;
    transition: all .2s;
    opacity: 75% !important;
  } 

  
</style>


