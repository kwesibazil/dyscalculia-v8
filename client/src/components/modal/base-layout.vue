<template>
  <transition name="nested" duration="550">
    <div v-show="active" class="overlay">
      <div class="modal-box bg-white shadow-sm rounded-3 ">
        <button @click="toggleModal()" class="btn-close align-self-end" type="button" aria-label="Close"></button>
        <div class="flex-grow-1 h-75 mb-3 ">
          <slot></slot>
        </div><!-- modal body ends here -->
      </div><!-- modal-box ends here -->
    </div><!-- overlay ends here -->
  </transition>
</template>

<script setup>
  import { storeToRefs } from 'pinia'
  import {useModalStore} from '@/stores/modal-store'
  const {active} = storeToRefs(useModalStore())
  const {toggleModal} = useModalStore()
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
    top: 10%;
    z-index: 9;
    margin: 0 auto;
    display: flex;
    max-width: 90%;
    min-height: 200px;
    position: relative;
    padding: .75rem 1rem;
    flex-direction: column;
  }

  @media (min-width:576px){
    .modal-box{
      top: 8%;
      max-width: 490px;
    }
  }

  .nested-enter-active .modal-box, .nested-leave-active .modal-box {
    transition: all 0.5s ease-in-out;
  }.nested-enter-from .modal-box, .nested-leave-to .modal-box {
    transform: translateY(-50px);
    opacity: 0;
  }

</style>