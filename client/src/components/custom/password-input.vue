<template>
  <div class="input-group input-group-lg">
    <LockIcon class="inputIcon" />
    <input  
      autocomplete="on"  
      :type="attr.type" 
      :value="modelValue" 
      placeholder="password" 
      class="form-control rounded-2 fs-6 px-5"  
      pattern="^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z]).{8,30}$"  
      @blur="$emit('update:modelValue', $event.target.value)" 
    >
    <span class="passwordIcon">
      <EyeSlashIcon v-if="attr.hidden" @click="showPassword('text')"/>
      <EyeIcon v-else @click="showPassword('password')"/>
    </span>
  </div>
</template>


<script setup>
  import { reactive } from 'vue';
  import EyeIcon from '@/components/icons/eye.vue'
  import LockIcon from '@/components/icons/lock.vue'
  import EyeSlashIcon from  '@/components/icons/eye-slash.vue'
  
  defineEmits(['update:modelValue'])
  defineProps(['modelValue'])


  const attr = reactive({
    hidden: true,
    type: 'password'
  })

  const showPassword = type => {
    attr.type = type
    attr.hidden = !attr.hidden
  }
</script>

<style scoped>
  input{
    height: 48px;
  }

  .passwordIcon{
    top: 8px;
    right: 10px;
    z-index: 5;
    opacity: 50%;
    position: absolute;
  }

</style>