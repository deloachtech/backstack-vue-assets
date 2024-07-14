<!-- 
 This form is intended to be placed within a container controlled by the 
 parent component to determine its final dimensions and positioning. 
 -->

<template>
  <form novalidate @submit.prevent="emit('submit', data)" class="signin-form bva-signin-form">
    <div class="text-center">
      <slot name="logo"></slot>
    </div>

    <h2 class="h4 mb-3 fw-normal text-center">Log In</h2>

    <div v-if="accounts.length > 0">
      <FormSelect :placeholder="false" id="account_id" label="Activate Account" v-model="data.account_id" :options="accounts" />

      <button class="btn btn-primary w-100 py-2 mt-4" type="submit" :disabled="submitting">
        <span v-if="submitting" class="spinner-border spinner-border-sm" aria-hidden="true"></span>
        <span v-else>Log In</span>
      </button>
    </div>

    <div v-else class="text-center">
      <p>A system error occurred. Please try again later.</p>
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";

import { FormSelect } from "@/components";

const emit = defineEmits(["submit"]);

const props = defineProps({
  submitting: {
    type: Boolean,
    default: false,
  },
  values: {
    type: Object,
    default: {
      accounts: {},
    },
  },
});

const accounts = props.values.accounts ? Object.entries(props.values.accounts).map(([k, v]) => ({ id: k, title: v })) : [];

const data = ref({
  account_id: props.values?.last_login || (accounts.length ? accounts[0].id : ""),
});
</script>

<style scoped></style>
