<template>
  <main class="container">
    <button @click="open = true">Open Modal</button>
    <button @click="load">Simulate Loading</button>

    <Modal :open="open" :loading="loading" :submitting="submitting" @cancel="cancel" @submit="submit"> This is the modal content. </Modal>
  </main>
</template>

<script setup>
import { ref } from "vue";
import { Modal } from "@/components";

const open = ref(false);
const loading = ref(false);
const submitting = ref(false);

const cancel = () => {
  open.value = false;
};

const load = async () => {
  open.value = true;
  loading.value = true;
  await new Promise((resolve) => setTimeout(resolve, 3000));
  loading.value = false;
};

const submit = async () => {
  submitting.value = true;
  await new Promise((resolve) => setTimeout(resolve, 3000));
  submitting.value = false;
};
</script>

<style scoped></style>
