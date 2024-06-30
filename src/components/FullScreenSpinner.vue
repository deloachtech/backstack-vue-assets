<script setup>
import { ref } from 'vue';

const props = defineProps({
    color: {
        type: String,
        default: 'primary'
    }
});

let color = ref(props.color);
</script>


<template>
    
    <div class="spinner-container">
        <div class="spinner-border" :class="'text-' + color" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
    
</template>


<style scoped>
.spinner-container {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 9999;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
}

.spinner-border {
    width: 2rem;
    height: 2rem;
    border-width: .25em;
    border: .25em solid currentColor;
    border-right-color: transparent;
    border-radius: 50%;
    animation: spin .75s linear infinite;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

.visually-hidden {
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