<script setup>
const emit = defineEmits(["submit", "cancel"]);

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  item: {
    type: Object,
    required: true,
    default: {},
  },
  loading: {
    type: Boolean,
    required: false,
    default: false,
  },
  heading:{
    type: String,
    required: false,
    default: "Update Value",
  },
  static: {
      type: Boolean,
      required: false,
      default: true,
    },
    backdrop: {
      type: [Boolean, String],
      required: false,
      default: 'static',
    },
    keyboard: {
      type: Boolean,
      required: false,
      default: false,
    },
});
</script>

<template>
  <div class="modal fade" :id="id" :data-bs-backdrop="props.backdrop" :data-bs-keyboard="keyboard" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5">{{ heading }}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <slot name="default"></slot>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" @click.prevent="emit('cancel', item)" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
          <button v-if="loading" type="button" disabled class="btn btn-primary"><span class="spinner-border spinner-border-sm" aria-hidden="true"></span> Submit</button>
          <button v-else type="submit" @click.prevent="emit('submit', item)" class="btn btn-primary">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
