<template>
    <input  
      autocomplete="on"  
      :type="type" 
      :value="modelValue" 
      placeholder="password" 
      class="form-control rounded-2 fs-6 px-5"  
      pattern="^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z]).{8,30}$"  
      @blur="$emit('update:modelValue', $event.target.value)" 
    >
</template>

<script setup>
  defineEmits(['update:modelValue'])
  defineProps(['modelValue', 'type'])
</script>

<style scoped>
  input{
    height: 48px;
  }
</style>