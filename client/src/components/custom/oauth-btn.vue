<template>
  <div class="my-4">
    <section class="d-flex justify-content-center mx-auto align-items-center w-90 ">
      <span class="col-5"><hr></span>
      <span class="px-3 text-muted text-center">or</span>
      <span class="col-5"><hr></span>
    </section>
    <section class="px-4 mt-3">
      <div class="d-flex justify-content-around w-100 mb-4">
        <button class="btn col-5 rounded-2 btn--links hvr-icon-spin">
          <GoogleIcon class="me-2 hvr-icon" /> 
          Google
        </button>
        <button class="btn col-5 rounded-2 btn--links hvr-icon-spin">
          <FacebookIcon class="me-2 fill-primary hvr-icon" /> 
          Facebook
        </button>
      </div>
      <div class="d-flex justify-content-around w-100 mb-4">
        <button class="btn col-5 rounded-2 btn--links hvr-icon-spin">
          <LinkedInIcon class="me-2 fill-info hvr-icon" /> 
          LinkedIn
        </button>
        <button class="btn col-5 rounded-2 btn--links hvr-icon-spin">
          <GitHubIcon class="me-2 hvr-icon" /> 
          GitHub
        </button>
      </div>
    </section>
  </div>
</template>


<script setup>
  import GoogleIcon from '@/components/icons/google.vue'
  import FacebookIcon from '@/components/icons/facebook.vue'
  import LinkedInIcon from '@/components/icons/linkedIn.vue'
  import GitHubIcon from '@/components/icons/github.vue'
</script>


<style scoped>
  .btn--links{
    display: flex;
    align-items: center;
    padding: .3rem 0rem;
    font-size: var(--fs-6);
    justify-content: center;
    border: 1px solid var(--bs-gray-300);
  }
</style>
