<template>
  <form @submit.prevent="submitForm" class="p-3 pb-0 mt-3">
    <div class="input-group input-group-lg form__input">
      <PersonIcon class="inputIcon" />
      <Email v-model="form.email"/>
    </div>

    <div class="input-group input-group-lg ">
      <LockIcon class="inputIcon" />
      <Password v-model="form.password" :type="props.type"  />
      <span class="passwordIcon">
        <EyeSlashIcon v-if="props.hidden" @click="showPassword('text')"/>
        <EyeIcon v-else @click="showPassword('password')"/>
      </span>
    </div>
  
    <div>
      <SignInCta v-if="authForm === 'signIn'"/>
      <SignUpCta v-else/>
    </div>
  </form>
</template>


<script setup>
  import { reactive } from 'vue';
  import { storeToRefs } from 'pinia'
  import {useModalStore} from '@/stores/modal'
  const {authForm} = storeToRefs(useModalStore())

  import EyeIcon from  "@/components/icons/eye.vue"
  import LockIcon from "@/components/icons/lock.vue"
  import PersonIcon from '@/components/icons/person.vue'; 
  import EyeSlashIcon from  "@/components/icons/eye-slash.vue"

  import Email from '@/components/custom/Email-input.vue';
  import Password from '@/components/custom/password-input.vue';
  import SignInCta from '@/components/custom/signIn-cta.vue';
  import SignUpCta from '@/components/custom/signUp-cta.vue';


  const form = reactive({
    email: '',
    password: ''
  })

  const props = reactive({
    hidden: true,
    type: 'password'
  })

  const showPassword = type => {
    props.type = type
    props.hidden = !props.hidden
  }
</script>




<style scoped>
  .passwordIcon{
    top: 8px;
    right: 10px;
    z-index: 5;
    opacity: 50%;
    position: absolute;
  }


  .form__input{
    margin-bottom: 2.5rem;
  }

  @media (min-width: 576px){
    .form__input{
      margin-bottom: 3rem;
    }
  }
</style>