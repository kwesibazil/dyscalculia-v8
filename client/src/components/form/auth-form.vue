<template>
  <form @submit.prevent="submitForm" class="p-3 pb-0 mt-3">
      <EmailInput v-model="form.email"/>
      <PasswordInput v-model="form.pwd" />

    <div>
      <SignInCta v-if="authForm === 'signIn'"/>
      <SignUpCta v-else/>
    </div>


  </form>
</template>


<script setup>
  import { reactive } from 'vue';
  import { storeToRefs } from 'pinia'
  import {useModalStore} from '@/stores/modal-store'
  import { useAuthStore } from '@/stores/auth-store';
  
  import PasswordInput from '@/components/custom/password-input.vue';
  import EmailInput from '@/components/custom/Email-input.vue';
  import SignInCta from '@/components/custom/signIn-cta.vue';
  import SignUpCta from '@/components/custom/signUp-cta.vue';

  
  const form = reactive({email: '',pwd: ''})
  const {authForm} = storeToRefs(useModalStore())
  const authStore = useAuthStore()
  


  /**
  * @todo write a regExp that both 
          validate and sanitize user input 
          before submitting to the server 
  */
  const submitForm = async () =>{  
    if (authForm.value === 'signIn') 
      await authStore.userLogin(form.email, form.pwd)
    else 
      await authStore.userRegistration(form.email,form.pwd)
  }


</script>

