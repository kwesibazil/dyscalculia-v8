<template>
  <div >
    <div class="input-group input-group-lg ">
      <PersonIcon class="inputIcon" />
      <input  
        required
        type="email"
        placeholder="email"  
        :value="modelValue" 
        autocomplete="username" 
        class="form-control py-sm-3 px-5 fs-6 rounded-2 position-relative"
        @blur="$emit('update:modelValue', $event.target.value)" 
      >
      </div>
      <FeedbackMsg msg="Please enter a valid email address" :class="{invisible: !signUpErr}"/>
    </div>
</template>



<script setup>
  import { storeToRefs } from 'pinia'
  import {useAuthStore} from '@/stores/auth-store'
  const {signUpErr} = storeToRefs(useAuthStore())

  import PersonIcon from '@/components/icons/person.vue'; 
  import FeedbackMsg from '@/components/custom/feedback.vue'

  defineEmits(['update:modelValue'])
  defineProps(['modelValue'])
</script>


<style scoped>
  input{
    height: 48px;
    position: relative;
  }
</style>

