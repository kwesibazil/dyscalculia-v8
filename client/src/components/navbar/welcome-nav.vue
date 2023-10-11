<template>
  <nav class="d-flex justify-content-sm-between justify-content-end align-items-center py-3">
    <button class="btn btn-link   d-none d-sm-block hvr-grow" type="button">
      <img class="img-fluid" width="150" src="@/assets/images/logo/dyscalculia.png" alt="dyscalculia">
    </button>
    <div @click="showAuthModal($event, 'Auth')">
      <button name="signUp" class="btn btn-outline-primary me-3 hvr-grow">Sign Up</button>
      <button name="signIn" class="btn btn-primary text-white hvr-grow">Sign In</button>
    </div>
  </nav>
</template>


<script setup>
  import {useModalStore} from '@/stores/modal'
  const { showAuthModal} = useModalStore()
</script>