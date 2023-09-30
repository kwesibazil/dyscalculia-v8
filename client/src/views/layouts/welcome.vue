<template>
  <div class="px-2">
    <WelcomeNav />
    <Teleport to='body' >
      <Modal />
    </Teleport> 
  </div>
</template>

<script setup>
  import Modal from '@/components/modal/modal-layout.vue';
  import WelcomeNav from '@/components/navbar/welcome-nav.vue';
</script> 
