<template>
  <div :class="[fullScreen ? 'spinner-container-fs' : 'spinner-container', 'bva-spinner']">
    <div :class="[fullScreen ? 'spinner-border-fs' : 'spinner-border', 'text-' + color]" role="status">
      <span :class="[fullScreen ? 'visually-hidden-fs' : 'visually-hidden', '']">Loading...</span>
    </div>
  </div>
</template>

<script setup>
//import { ref } from "vue";

const props = defineProps({
  color: {
    type: String,
    default: "primary",
  },
  fullScreen: {
    type: Boolean,
    default: false,
  },
});

//let color = ref(props.color);
</script>

<style scoped>
.spinner-container-fs {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.spinner-border-fs {
  width: 2rem;
  height: 2rem;
  border-width: 0.25em;
  border: 0.25em solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: spin 0.75s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.visually-hidden-fs {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>
