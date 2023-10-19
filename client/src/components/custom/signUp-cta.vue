<template>
  <div class="position-relative">
    <FeedbackMsg v-if="signInErr" msg='Incorrect email or password' class="mt-2"  :class="{invisible: !signInErr}"/>

    <div v-else class="form-text text-muted fs-8 mt-3 msg">
      <p class="mb-2">8-30 characters, with at least one number, one lowercase and one uppercase letter.</p>
    </div>


    <div class="d-grid text-center w-75 mx-auto">
      <button type="submit" class="btn btn-primary text-white py-2 mt-3">Create Account</button>
    </div>
    <div class="text-center mt-1">
      <span class="text-dark fs-8 opacity-75 me-1">Already a member?</span>
      <button @click="[setAuthModal('signIn', 'Auth'), resetErrMsg()]" class="text-warning text-decoration-none btn btn-link btn-sm px-0" type="button">Login</button>
    </div>
  </div>
</template>


<script setup>
  import {storeToRefs} from 'pinia'
  import {useAuthStore} from '@/stores/auth-store'
  import {useModalStore} from '@/stores/modal-store';
  const {signInErr} = storeToRefs(useAuthStore())
  const {setAuthModal} = useModalStore()
  const {resetErrMsg} = useAuthStore()
  import FeedbackMsg from '@/components/custom/feedback.vue'

</script>

<style scoped>
  .msg{
    top: -10px;
    position: relative;
  }
</style>