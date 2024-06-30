<script setup>
const props = defineProps({
  links: {type: Array, required: true, default: []},
})
</script>


<template>
  <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item" 
          v-for="(link, index) in props.links" 
          :key="index"
          v-bind:class="{ active: link.current }" 
          aria-current="page">
        <a v-if="!link.current" :href="link.href ? link.href : 'javascript:void(0)'">{{ link.label }}</a>
        <span v-else>{{ link.label }}</span>
      </li>
    </ol>
  </nav>
</template>


<style scoped></style>