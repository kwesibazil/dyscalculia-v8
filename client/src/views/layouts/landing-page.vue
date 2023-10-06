<template>
  <div class="px-2">
    <WelcomeNav /> 
    <Teleport to='body' >
      <Modal>
        <keep-alive>
          <component :is="current"></component>
        </keep-alive>
      </Modal>
    </Teleport> 
  </div>
</template>

<script setup>

  import { storeToRefs } from 'pinia'
  import {useModalStore} from '@/stores/modal'
  import Modal from '@/components/modal/base-layout.vue';
  import WelcomeNav from '@/components/navbar/welcome-nav.vue';
  
  const {current} = storeToRefs(useModalStore())


  // import { mapGetters} from '@/helpers/vuex';
  // const {getState} = mapGetters()
</script> 


