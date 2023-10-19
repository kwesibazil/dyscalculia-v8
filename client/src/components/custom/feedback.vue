<template>
  <div class="feedback-msg text-danger">
    <ExclamationIcon />
    <span class="ms-2">{{ msg }}</span>
  </div>
</template>

<script setup>
  import ExclamationIcon from "@/components/icons/exclamation.vue"
  defineProps({msg:String})
</script>





<style scoped>
  .feedback-msg{
    display: flex;
    margin: .4rem 0 1rem 0;
    align-items: center;
    font-size:  calc(var(--fs-8) * 1.1);
  }
</style>