<template>
  <div class="d-flex flex-column">
    <header>
      <h1 class="text-center fs-5 fw-bold mb-4 mt-2">Please sign in to continue</h1>
    </header>
    <main class="border border-top-0 bg-white flex-grow-1 ">
      <TabsBtn />
      <AuthForm />
      <Oauth />
    </main>
  </div>
</template>


<script setup>
  import TabsBtn from '@/components/custom/tab-Buttons.vue';
  import AuthForm from '@/components/form/auth-form.vue';
  import Oauth from '@/components/custom/oauth-btn.vue'
</script>

<style scoped>
  
  main{
    min-height: 370px;
  }
</style>