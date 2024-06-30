<!-- 
 This form is intended to be placed within a container controlled by the 
 parent component to determine its final dimensions and positioning. 
 -->

<script setup>


const props = defineProps({
    signupRoute: {
        type: String,
        default: '/signup'
    },
    loginRoute: {
        type: String,
        default: '/login'
    },
    success: {
        type: Boolean,
        required: true,
        default: false
    }
})


</script>

<template>

    <form class="signin-form">

        <div class="text-center">
            <slot name="logo"></slot>
        </div>

        <h2 class="h4 mb-3 fw-normal text-center">{{ success ? 'Success!' : 'Account Activation' }}</h2>

        <div class="text-center">
            <p v-if="success"> Your account has been activated. <a :href="loginRoute">Log in</a> and get started.
            </p>
            <p v-else> Invalid or expired activation email. Please <a :href="signupRoute">sign up</a> to create a new
                one.</p>
        </div>

    </form>
</template>


<style scoped></style>