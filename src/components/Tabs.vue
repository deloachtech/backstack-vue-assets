<script setup>
import { ref } from 'vue';

const props = defineProps({
    currentTabId: {
        type: String,
        required: true
    },
    tabs: {
        type: Array,
        required: true
    }
})

let initialIndex = props.tabs.findIndex(tab => tab.id === props.currentTabId)

const currentTabIndex = ref(initialIndex >= 0 ? initialIndex : 0)

</script>

<template>
    <ul class="nav nav-underline bva-tabs">
        <li v-for="(tab, index) in tabs" class="nav-item" :key="tab.id">
            <a :class="[currentTabIndex === index ? 'active' : '', 'nav-link']" href="javascript:void(0)" @click.prevent="() =>{
                currentTabIndex = index
              }">{{ tab.label }}</a>
        </li>
    </ul>

    <div class="tabs-component mt-5">
      <component :is="props.tabs[currentTabIndex].component"></component>
    </div>
</template>


<style scoped></style>