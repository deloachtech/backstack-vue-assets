<template>
    <div>
        <slot :records="records"></slot>
        <button v-if="hasMore" @click="loadMore">More records...</button>
    </div>
</template>

<script setup>

/*
<LoadMore :fetch-records="fetchRecords">
  <template #default="{ records }">
    <Table :records="records">
      <!-- Table rows go here -->
    </Table>
  </template>
</LoadMore>
*/
import { ref } from 'vue';

const props = defineProps({
    fetchRecords: {
        type: Function,
        required: true,
    },
});

let records = ref([]);
let limit = 10;
let offset = 0;
let hasMore = ref(true);

const loadMore = () => {
    offset += limit;
    props.fetchRecords(limit, offset).then(newRecords => {
        records.value.push(...newRecords);
        hasMore.value = newRecords.length === limit;
    });
};

onMounted(loadMore);
</script>