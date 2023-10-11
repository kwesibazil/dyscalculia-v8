<template>
  <div id="authTab" class="d-flex">
    <button @click="setAuthModal('signUp', 'Auth')" :class="{'btn--current': authForm == 'signUp'}" class="col-6 btn btn-secondary opacity-50 py-2 py-sm-3" type="button">SignUp</button>
    <button @click="setAuthModal('signIn', 'Auth')" :class="{'btn--current': authForm == 'signIn'}" class="col-6 btn btn-secondary opacity-50 py-2 py-sm-3" type="button">SignIn</button>
  </div>
</template>



<script setup>
  import { storeToRefs } from 'pinia'
  import { useModalStore } from '@/stores/modal';
  const {authForm} = storeToRefs(useModalStore())
  const {setAuthModal} = useModalStore()
</script>



<style scoped>
  .btn{
    opacity: 60%;
    border-radius: 0;
  }

  .btn--current, .btn--current:hover, .btn--current:active, .btn--current:focus {
    color: black;
    font-weight: bold;
    border: 1px solid white;
    background-color: transparent;
    border-top: 1px solid #6c757d6b;
    transition: all .2s;
  } 

  
</style>


