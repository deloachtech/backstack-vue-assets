<script setup>
import { Dropdown, ArrowLink, Table } from "@/components";
</script>

<template>

<Table class="mt-5" :columns="[
      { key: 'name', label: 'Name', class: '' },
      { key: 'party', label: 'Party', class: 'table-cell-hide-on-medium' },
      { key: 'term', label: 'Term', class: '' },
      { key: 'comment', label: 'Comment', class: '' },
      { key: 'actions', label: '', class: 'table-cell-hide-on-small' }
    ]" :data="[
      { name: 'George Washington', party: 'None, Federalist', term: '1789-1797', comment: '0' },
      { name: 'John Adams', party: 'Federalist', term: '1797-1801', comment: '1' },
      { name: 'Thomas Jefferson', party: 'Democratic-Republican', term: '1801-1809', comment: '2' }]">

      <template #name="{ record }">
        <span class="avatar"><i class="fas fa-user"></i></span>
        <ArrowLink href="https://google.com" :text="record.name" />
      </template>

      <template #party="{ record }">
        {{ record.party }}
      </template>

      <template #term="{ record }">
        {{ record.term }}
      </template>

      <template #comment="{ record }">
        {{ record.comment }}
      </template>

      <template #actions="{ record }">
        <Dropdown label='<i class="bi bi-three-dots-vertical"></i>' label-only :options="[
          { action: 'edit', label: 'Edit', record: record },
          { action: 'delete', label: 'Delete', record: record },
          { action: 'view', label: 'View Details', record: record },
        ]" @click="(option) => console.log(option)" />
      </template>
    </Table>
</template>


<style scoped>
</style>