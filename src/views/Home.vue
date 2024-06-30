<script setup>
import { ref } from "vue";

import { Dropdown, PageHeading, Breadcrumbs, FullScreenSpinner, Error500, Error404 } from "@/components";

const loading = ref(false)

const submitData = async () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 500)
}


submitData()


</script>

<template>



  <div v-if="loading">
    <FullScreenSpinner />
  </div>

  <div v-else-if="1 === 2">

    <Error404 />

  </div>


  <div v-else>


    <Breadcrumbs class="mt-3" :links="[
      { label: 'Home', href: 'javascript:void(0)' },
      { label: 'Library', current: true }
    ]" />


    <PageHeading class="mt-5" heading="Backstack Options">

      <template #text>
        Backstack options for developer applications.
      </template>

      <template #actions>

        <input class="form-control" type="search" placeholder="Search" aria-label="Search">

        <Dropdown label='<i class="bi bi-funnel"></i> All' :options="[
          { label: 'google.com', href: 'https://google.com' },
          { label: 'Active', foo: 'bar' },
          { label: 'Inactive' }
        ]" @click="(option) => console.log(option)" />


        <button type="button" class="btn btn-primary">Add</button>

      </template>
    </PageHeading>



  </div>



</template>

<style scoped></style>
