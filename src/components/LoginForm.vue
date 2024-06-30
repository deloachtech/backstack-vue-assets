<!-- 
 This form is intended to be placed within a container controlled by the 
 parent component to determine its final dimensions and positioning. 
 -->

<script setup>
import { ref } from 'vue'

import { FormInput } from '@/components'

const emit = defineEmits(['submit'])

const props = defineProps({
    allowSignup: {
        type: Boolean,
        default: false
    },
    signupRoute: {
        type: String,
        default: '/signup'
    },
    forgotPasswordRoute: {
        type: String,
        default: '/forgot-password'
    },
    loading: {
        type: Boolean,
        default: false
    },
    allowRememberMe: {
        type: Boolean,
        default: false
    },
    errors: {
        type: Object,
        default: {}
    }
})

const data = ref({
    username: '',
    password: '',
    rememberMe: false
})

</script>

<template>

    <form novalidate @submit.prevent="emit('submit', data)" class="signin-form">

        <div class="text-center">
            <slot name="logo"></slot>
        </div>

        <h2 class="h4 mb-3 fw-normal text-center">Log In</h2>

        <FormInput id="username" label="Username" v-model="data.username" :error="errors.username" />


        <FormInput id="password" label="Password" v-model="data.password" :error="errors.password" type="password"
            class="mt-3" />


        <div v-if="allowRememberMe" class="form-check text-start mt-3">
            <input v-model="data.rememberMe" class="form-check-input" type="checkbox" value="remember-me"
                id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
                Remember me
            </label>
        </div>
        <div v-else class="mt-3"> {{ ' ' }}</div>

        <button class="btn btn-primary w-100 py-2 mt-4" type="submit" :disabled="loading">
            <span v-if="loading" class="spinner-border spinner-border-sm" aria-hidden="true"></span>
            <span v-else>Log in</span>
        </button>

        <div class="mt-3 mb-3 text-body-secondary text-center">
            <div><a :href="forgotPasswordRoute">Forgot your password?</a></div>
            <div v-if="allowSignup" class="mt-2"><a :href="signupRoute">Need an account?</a></div>
        </div>

    </form>
</template>


<style scoped></style>