<template>
  <div class="position-relative">
    <div  class="text-end ">
      <button type="button" class="text-primary opacity-75 btn btn-link btn-sm px-0 mt-1">forgot password?</button>
    </div>
    <FeedbackMsg msg='Incorrect email or password' class="feedback"  :class="{invisible: !signInErr}"/>
    <div class="d-grid text-center w-75 mx-auto">
      <button type="submit" class="btn btn-primary text-white py-2 mt-4">Sign In</button>
    </div>
    <div class="text-center mt-1">
      <span class="text-dark fs-8 opacity-75 me-1 fw-bold">Need an account?</span>
      <button @click="[setAuthModal('signUp'), resetErrMsg()]"  class="btn btn-link text-primary btn-sm fw-bold  px-0" type="button">Sign up</button>
    </div>
  </div>          
</template>


<script setup>
  import {storeToRefs } from 'pinia'
  import {useAuthStore} from '@/stores/auth-store'
  import {useModalStore} from '@/stores/modal-store';
  const {signInErr} = storeToRefs(useAuthStore())
  const {setAuthModal} = useModalStore()
  const {resetErrMsg} = useAuthStore()
  
  import FeedbackMsg from '@/components/custom/feedback.vue'

</script>


<style scoped>
  .feedback{
    top:2px;
    position: absolute;
  }

</style>
