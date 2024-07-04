<script setup>
import { ref, computed } from 'vue'
import { PageHeading } from './components';
</script>

<template>

  <main class="container">


<PageHeading heading="Select Account">
        <template #text>
            This is some heading text.
        </template>
    </PageHeading>


    <PageHeading heading="Select Account" asSubheading>
        <template #text>
            This is some heading text.
        </template>
    </PageHeading>

  </main>
</template>


<style scoped></style>