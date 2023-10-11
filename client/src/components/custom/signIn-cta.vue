<template>
  <div>
    <div class="text-end">
      <button type="button" class="text-primary opacity-75 btn btn-link btn-sm px-0 my-1">forgot password?</button>
    </div>
    <div class="d-grid text-center w-75 mx-auto">
      <button type="submit" class="btn btn-primary text-white py-2 mt-3">Sign In</button>
    </div>
    <div class="text-center mt-1">
      <span class="text-dark fs-8 opacity-75 me-1">Need an account?</span>
      <button @click="setAuthModal('signUp', 'Auth')"  class="text-warning text-decoration-none btn btn-link btn-sm px-0" type="button">create account</button>
    </div>
  </div>          
</template>


<script setup>
  import { useModalStore } from '@/stores/modal';
  const {setAuthModal} = useModalStore()
</script>


