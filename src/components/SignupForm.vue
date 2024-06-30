<!-- 
 This form is intended to be placed within a container controlled by the 
 parent component to determine its final dimensions and positioning. 
 -->


<script setup>
import { ref, computed } from 'vue'

import { FormInput, FormSelect, SelectExtended } from '@/components'

const emit = defineEmits(['submit'])

const props = defineProps({
    loginRoute: {
        type: String,
        default: '/login'
    },
    loading: {
        type: Boolean,
        default: false
    },
    errors: {
        type: Object,
        required: true,
        default: {}
    },
    countries: {
        type: Array,
        required: true,
        default: []
    },
    domains: {
        type: Object,
        required: true,
        default: {}
    },
    success: {
        type: Boolean,
        required: true,
        default: false
    }
})


// Filter and format domains for the SelectExtended component
const domains = computed(() => {
    return Object.entries(props.domains)
        .filter(([_, domain]) => domain.allow_signup)
        .map(([id, domain]) => ({
            id,
            label: domain.title,
            text: domain.signup_help
        }));
})

const data = ref({
    username: '',
    password: '',
    email: '',
    account_title: '',
    name: '',
    country_id: '',
    domain_id: domains.value.length === 1 ? domains.value[0].id : ''
})

// const selectedDomain = ref({})

const handleClick = (option) => {
    //  selectedDomain.value = domain;

    data.value.domain_id = option.id;
}


</script>

<template>

    <form novalidate @submit.prevent="emit('submit', data)" class="signin-form">

        <div class="text-center">
            <slot name="logo"></slot>
        </div>

        <h2 class="h4 mb-3 fw-normal text-center">{{ success ? 'Success!' : 'Sign Up' }}</h2>

        <div v-if="showSuccess" class="text-center">

            <p>Check your email for account activation instructions.</p>

        </div>

        <div v-else>

            <FormInput placeholder="Name" id="name" v-model="data.name" :error="props.errors.name" />

            <FormInput id="email" placeholder="Email" v-model="data.email" :error="props.errors.email" type="email"
                class="mt-3" />

            <FormInput placeholder="Username" id="username" v-model="data.username" :error="props.errors.username"
                class="mt-3" />

            <FormInput placeholder="Password" id="password" v-model="data.password" :error="props.errors.password"
                type="password" class="mt-3" />

            <FormInput placeholder="Company" id="account_title" v-model="data.account_title"
                :error="props.errors.account_title" class="mt-3" />

            <div v-if="1 === 2" class="dropdown mt-3 w-100">
                <button
                    :class="[props.errors?.domain_id ? 'invalid-border' : '', 'btn btn-secondary dropdown-toggle w-100']"
                    type="button" data-bs-toggle="dropdown" aria-expanded="false">Account type
                    {{ selectedDomain.title ? ': ' + selectedDomain.title : '' }}{{ ' ' }}
                </button>
                <ul class="dropdown-menu w-100">
                    <li v-for="domain in props.domains" :key="domain.id"><a @click.prevent="handleClick(domain)"
                            class="dropdown-item mt-1" href="javascript:void(0)">{{ domain.signup_help ?
                                `${domain.title} -
                            ${domain.signup_help}` : domain.title }}</a></li>
                </ul>
                <div v-if="props.errors?.domain_id?.length > 0" class="invalid-text">
                    {{ props.errors.domain_id }}
                </div>
            </div>


            <SelectExtended v-if="domains.length > 1" class="mt-3" placeholder="Access type" :options="domains"
                :error="props.errors.domain_id" @select="(option) => { handleClick(option) }"
                help="Select the option that best suits your app usage." />


            <FormSelect id="country_id" placeholder="Country" v-model="data.country_id" :error="props.errors.country_id"
                :options="props.countries" class="mt-3 mb-3" />


            <button class="btn btn-primary w-100 py-2 mt-4" type="submit" :disabled="props.loading">
                <span v-if="props.loading" class="spinner-border spinner-border-sm" aria-hidden="true"></span>
                <span v-else>Create Account</span>
            </button>

            <div class="mt-3 mb-3 text-body-secondary text-center">
                <div><a :href="props.loginRoute">Already have an account?</a></div>
            </div>
        </div>

    </form>
</template>


<style scoped>
/*
.invalid-text {
    font-size: 0.875em;
    margin-top: 0.25rem;
    color: var(--bs-form-invalid-color);
}

.invalid-border {
    border-color: var(--bs-form-invalid-color);
}

.dropdown-item {
    white-space: normal;
    overflow-wrap: break-word;
}
    */
</style>