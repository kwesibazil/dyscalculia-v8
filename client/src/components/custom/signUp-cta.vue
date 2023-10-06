<template>
  <div>
    <div class="form-text text-muted fs-8 ">
      <p class="mb-2">8-30 characters, with at least one number, one lowercase and one uppercase letter.</p>
    </div>
    <div class="d-grid text-center w-75 mx-auto">
      <button type="submit" class="btn btn-primary text-white py-2 mt-4">Create Account</button>
    </div>
    <div class="text-center mt-1">
      <span class="text-dark fs-8 opacity-75 me-1">Already a member?</span>
      <button @click="setAuthModal('signIn')" class="text-warning text-decoration-none btn btn-link btn-sm px-0" type="button">Login</button>
    </div>
  </div>
</template>


<script setup>
  import { useModalStore } from '@/stores/modal';
  const {setAuthModal} = useModalStore()
</script>

