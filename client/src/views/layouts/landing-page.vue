<template>
  <div class="px-2">
    <WelcomeNav  /> 
    <Teleport to='body' >
      <Modal>
        <keep-alive>
          <component :is="current"></component>
        </keep-alive>
      </Modal>
    </Teleport> 

    <div class="text-center hero-text ">
      <img src="@/assets/images/logo/lg-logo.png" class="img-fluid mx-auto" alt="logo">
      <p class="overflow-hidden my-3 mx-auto  ">
        Hello participants, we are inviting you to participate 
        in our <strong>research on Dyscalculia 
        and Game-Based Learning</strong>. We thank you in advance for your participation.
        Please be assured that the data collected will remain confidential and 
        used solely for academic purposes.
      </p>
      <button  @click="showAuthModal($event, 'Research')" name="research" class="btn btn-primary my-4 text-white hvr-grow" type="button">Learn more</button>
    </div>
  </div>
</template>

<script setup>

  import { storeToRefs } from 'pinia'
  import {useModalStore} from '@/stores/modal'
  import Modal from '@/components/modal/base-layout.vue';
  import WelcomeNav from '@/components/navbar/welcome-nav.vue';
  
  const {current} = storeToRefs(useModalStore())
  const { showAuthModal} = useModalStore() 
</script> 

<style scoped>
  .hero-text p{
    max-height: 145px;
    width: 90%
  }

  @media (min-width:576px){
    .hero-text{
      margin-top: 120px;
    }
    .hero-text p{
      width: 70%;
    }
  }


  @media (min-width:1300px){
    .hero-text{
      margin-top: 150px;
    }
    .hero-text p{
      width: 50%;
    }
  }
</style>