<script setup>
import { v4 as uuidv4 } from 'uuid';

const emit = defineEmits(['click'])

const props = defineProps({
    label: { type: String, required: true },
    options: { type: Array, required: true, default: [] },
    labelOnly: { type: Boolean, default: false },
})

const uniqueId = uuidv4();
</script>

<template>
    <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" :class="{ 'label-only': props.labelOnly }" type="button" :id="uniqueId"
            data-bs-toggle="dropdown" aria-expanded="false" v-html="props.label">
        </button>
        <ul class="dropdown-menu" :aria-labelledby="uniqueId">
            <li v-for="(option, index) in props.options" :key="index">
                <a v-if="option.href" class="dropdown-item" :href="option.href" :id="'dropdownItem' + index">{{ option.label }}</a>
                <a v-else class="dropdown-item" href="javascript:void(0)" @click.prevent="emit('click', option)" :id="'dropdownItem' + index">{{ option.label }}</a>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.label-only {
    background: none;
    border: none;
    color: inherit;
}

.label-only::after {
    display: none;
}
</style>