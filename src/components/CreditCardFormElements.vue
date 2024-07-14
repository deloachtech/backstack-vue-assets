<!-- 
 These form elements are intended to be placed within a container controlled by the 
 parent component to determine its final dimensions, positioning and submission. 
 -->

<template>
  <div class="row gy-4">
    <div class="col-12">
      <FormInput id="cc-number" label="Credit card number" placeholder="XXXXXXXXXXXXXXXX" ref="ccNumber" @input="handleNumberInput" @blur="onNumberBlur" :error="errors['cc-number']" maxlength="16" />
    </div>
    <div class="col-6">
      <FormInput id="cc-expiration" label="Expiration" placeholder="MMYY" ref="ccExpiration" @input="handleExpirationInput" @blur="onExpirationBlur" :error="errors['cc-expiration']" maxlength="4" />
    </div>
    <div class="col-6">
      <FormInput id="cc-cvv" label="CVV" placeholder="CVV" ref="ccCvv" @input="handleCvvInput" @blur="onCvvBlur" :error="errors['cc-cvv']" maxlength="4" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { FormInput } from "@/components";
import { handleNumberInput, handleExpirationInput, handleCvvInput, handleNumberBlur, handleExpirationBlur, handleCvvBlur } from "@/assets/js/creditCardUtilities";

const ccNumber = ref(null);
const ccExpiration = ref(null);
const ccCvv = ref(null);
const errors = ref({});

const onNumberBlur = (event) => handleNumberBlur(event, errors.value, "cc-number");
const onExpirationBlur = (event) => handleExpirationBlur(event, errors.value, "cc-expiration");
const onCvvBlur = (event) => handleCvvBlur(event, errors.value, "cc-cvv");
</script>
