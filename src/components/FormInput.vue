<template>
  <div class="bva-form-input">
    <label v-if="label" :for="id" class="form-label">{{ label }}</label>
    <input @blur="handleBlur" @input="handleInput" :maxlength="$attrs.maxlength" :placeholder="$attrs.placeholder" v-model="modelValue" :type="type" :id="id" class="form-control" :class="{ 'is-invalid': error }" />
    <div v-if="error" class="invalid-feedback">
      {{ error }}
    </div>
    <div v-if="help" class="form-text">{{ help }}</div>
  </div>
</template>

<script setup>
const props = defineProps({
  id: String,
  label: String,
  type: {
    type: String,
    default: "text",
  },
  error: String,
  help: String,
});

const modelValue = defineModel();


const emit = defineEmits(['blur', 'input']);

const handleBlur = (event) => {
  emit('blur', event);
};
const handleInput = (event) => {
  emit('input', event);
};
</script>
