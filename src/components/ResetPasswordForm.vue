<!-- 
 This form is intended to be placed within a container controlled by the 
 parent component to determine its final dimensions and positioning. 
 -->
<script setup>
import { ref } from 'vue'

import { FormInput } from '@/components'

const emit = defineEmits(['submit'])

const props = defineProps({
    token: {
        type: [String,null],
        required: true
    },
    loginRoute: {
        type: String,
        default: '/login'
    },
    forgotPasswordRoute: {
        type: String,
        default: '/forgot-password'
    },
    loading: {
        type: Boolean,
        default: false
    },
    errors: {
        type: Object,
        default: {}
    },
    success: {
        type: Boolean,
        required: true,
        default: false
    }
})

const data = ref({
    password: '',
    confirm: '',
    token: props.token
})


</script>

<template>


    <form novalidate @submit.prevent="emit('submit', data)" class="signin-form">

        <div class="text-center">
            <slot name="logo"></slot>
        </div>

        <h2 class="h4 mb-3 fw-normal text-center">{{ success ? 'Success!' : 'Reset password' }}</h2>

        <div v-if="!data.token" class="text-center">

            <p>Invalid or expired reset password link. Please <a :href="forgotPasswordRoute">request a new one</a>.</p>

        </div>
        <div v-else>

            <div v-if="success" class="text-center">

                <p> Your can <a :href="loginRoute">log in</a> with your new password.</p>

            </div>


            <div v-else>
                <FormInput id="password" label="New Password" v-model="data.password" :error="errors.password"
                    type="password" />


                <FormInput id="confirm" label="Confirm new password" v-model="data.confirm" :error="errors.confirm"
                    type="password" class="mt-3 mb-3" />


                <button class="btn btn-primary w-100 py-2 mt-4" type="submit" :disabled="loading">
                    <span v-if="loading" class="spinner-border spinner-border-sm" aria-hidden="true"></span>
                    <span v-else>Reset</span>
                </button>

                <div class="mt-3 mb-3 text-body-secondary text-center">
                    <div v-if="1===2"><a :href="forgotPasswordRoute">Need a new email?</a></div>
                    <div class="mt-2"><a :href="loginRoute">Remembered password?</a></div>
                </div>
            </div>

        </div>
    </form>
</template>


<style scoped></style>