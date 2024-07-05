<script setup>
const props = defineProps({});
</script>

<template>
  <ul class="list-group">
    <li
      class="list-group-item d-flex justify-content-between align-items-center"
    >
      <div class="d-flex align-items-center">
        <i class="bi bi-paperclip me-2"></i>
        <span class="me-auto">resume_back_end_developer.pdf</span>
        <span class="badge bg-secondary rounded-pill">2.4mb</span>
      </div>
      <div class="ms-4">
        <button type="button" class="btn btn-outline-primary btn-sm me-2">
          Update
        </button>
        <button type="button" class="btn btn-outline-secondary btn-sm">
          Remove
        </button>
      </div>
    </li>
    <li
      class="list-group-item d-flex justify-content-between align-items-center"
    >
      <div class="d-flex align-items-center">
        <i class="bi bi-paperclip me-2"></i>
        <span class="me-auto">cover_letter_back_end_developer.pdf</span>
        <span class="badge bg-secondary rounded-pill">4.5mb</span>
      </div>
      <div class="ms-4">
        <button type="button" class="btn btn-outline-primary btn-sm me-2">
          Update
        </button>
        <button type="button" class="btn btn-outline-secondary btn-sm">
          Remove
        </button>
      </div>
    </li>
  </ul>
</template>

<style scoped></style>
