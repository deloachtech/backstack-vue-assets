<template>
  <div ref="modalRef_xyh3476fcif63ife8" :data-bs-backdrop="backdrop" :data-bs-keyboard="keyboard" class="modal fade bva-modal" id="modalId-xyh3476fcif63ife8" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h1 v-if="heading" class="modal-title fs-5" v-html="heading"></h1>
          <button @click.prevent="emit('cancel')" type="button" class="btn-close" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div :class="[loading ? 'spinner-container' : 'mb-3']">
            <Spinner v-if="loading" />
            <slot v-else></slot>
          </div>
        </div>
        <div class="modal-footer">
          <button @click.prevent="emit('cancel')" type="button" class="btn btn-secondary">{{ cancelLabel }}</button>
          <button v-if="submitting" type="button" disabled class="btn btn-primary"><span class="spinner-border spinner-border-sm" aria-hidden="true"></span> {{ submitLabel }}</button>
          <button v-else-if="loading" type="button" disabled class="btn btn-primary">{{ submitLabel }}</button>
          <button v-else type="submit" @click.prevent="emit('submit')" class="btn btn-primary">{{ submitLabel }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import { Modal } from "bootstrap";
import { Spinner } from "@/components";

const emit = defineEmits(["submit", "cancel"]);

const modalRef_xyh3476fcif63ife8 = ref(null);

const props = defineProps({
  open: { type: Boolean, required: false, default: false },
  submitting: { type: Boolean, required: false, default: false },
  loading: { type: Boolean, required: false, default: false },
  heading: String,
  cancelLabel: { type: String, required: false, default: "Cancel" },
  submitLabel: { type: String, required: false, default: "Submit" },
  static: { type: Boolean, required: false, default: true },
  backdrop: { type: [Boolean, String], required: false, default: "static" },
  keyboard: { type: Boolean, required: false, default: false },
});

const openModal = () => {
  const modalElement = modalRef_xyh3476fcif63ife8.value;
  if (modalElement) {
    const modalInstance = new Modal(modalElement);
    modalInstance.show();
  }
};

onMounted(() => {
  modalRef_xyh3476fcif63ife8.value = document.getElementById("modalId-xyh3476fcif63ife8");
  if (modalRef_xyh3476fcif63ife8.value) {
    new Modal(modalRef_xyh3476fcif63ife8.value);
  }
});

const closeModal = () => {
  const modalElement = modalRef_xyh3476fcif63ife8.value;
  if (modalElement) {
    const modalInstance = Modal.getInstance(modalElement);
    modalInstance.hide();
  }
};

watch(
  () => props.open,
  (value) => {
    if (value) {
      openModal();
    } else {
      closeModal();
    }
  }
);
</script>

<style scoped>
.spinner-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25vh; /* 1/4 of the screen height */
}
</style>
