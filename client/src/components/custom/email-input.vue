<template>
  <input  
    required
    type="email"
    placeholder="email"  
    :value="modelValue" 
    autocomplete="username" 
    class="form-control py-sm-3 px-5 fs-6 rounded-2"
    @blur="$emit('update:modelValue', $event.target.value)" 
    >
</template>



<script setup>
  defineEmits(['update:modelValue'])
  defineProps(['modelValue'])
</script>


<style scoped>
  input{
    height: 48px;
  }
</style>