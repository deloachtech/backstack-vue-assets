<script setup>

const props = defineProps({
    heading: {type: String, required: true},
})

import {useSlots} from "vue";


const slots = useSlots()
const hasSlot = (name) => {
    return !!slots[name];
}
</script>


<template>

    <div class="d-md-flex justify-content-between">

        <div class="text-start">
            
            <div class="fs-2 fw-bold">{{ props.heading }}</div>

            <div v-if="hasSlot('text')" class="text-secondary">
                <slot name="text"></slot>
            </div>
        </div>

        <div v-if="hasSlot('actions')" class="text-sm-start text-md-end mt-2 mt-md-0">

            <div class="d-flex align-self-baseline gap-1">

                <slot name="actions"></slot>

            </div>
        </div>
    </div>

</template>


<style scoped>
</style>