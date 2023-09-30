<template>
  <transition name="nested" duration="550">
    <div v-show="getState('modal')" class="overlay">
      <div class="modal-box bg-white shadow-sm rounded-3 ">
        <button @click="toggler('modal')" class="btn-close align-self-end" type="button" aria-label="Close"></button>
        <ModalContent />
      </div><!-- modal-box ends here -->
    </div><!-- overlay ends here -->
  </transition>
</template>

<script setup>
  import ModalContent from '@/components/modal/modal-content.vue'
  import { mapGetters, mapMutations } from '@/helpers/vuex';

  const {getState} = mapGetters()
  const {toggler} = mapMutations()
</script>



<style scoped>
  .overlay{
    top: 0;
    left: 0;
    z-index: 8;
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: #00000066;
  }

  .modal-box{
    top: 12%;
    z-index: 9;
    margin: 0 auto;
    display: flex;
    max-width: 90%;
    min-height: 200px;
    max-height: 75% ;
    position: relative;
    padding: .75rem 1rem;
    flex-direction: column;
  }

  .nested-enter-active .modal-box, .nested-leave-active .modal-box {
    transition: all 0.5s ease-in-out;
  }

  .nested-enter-from .modal-box, .nested-leave-to .modal-box {
    transform: translateY(-50px);
    opacity: 0;
  }

</style>