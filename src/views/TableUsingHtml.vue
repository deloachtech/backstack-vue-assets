<script setup>
import { Dropdown, ArrowLink } from "@/components";
</script>

<template>
<div class="table-responsive mt-5">
      <table class="table table-hover table-borderless">
        <thead>
          <tr>
            <th>Name</th>
            <th class="table-cell-hide-on-medium">Party</th>
            <th>Term</th>
            <th>Comment</th>
            <th class="table-cell-hide-on-small"></th>
          </tr>
        </thead>
        <tbody class="table-group-divider">
          <tr v-for="(record, index) in
            [
              { name: 'George Washington', party: 'None, Federalist', term: '1789-1797', comment: '0' },
              { name: 'John Adams', party: 'Federalist', term: '1797-1801', comment: '1' },
              { name: 'Thomas Jefferson', party: 'Democratic-Republican', term: '1801-1809', comment: '2' }
            ]" :key="index">
            <td>
              <span class="avatar"><i class="fas fa-user"></i></span>
              <ArrowLink href="https://google.com" :text="record.name" />
            </td>
            <td class="table-cell-hide-on-medium">{{ record.party }}</td>
            <td>{{ record.term }}</td>
            <td>{{ record.comment }}</td>
            <td class="table-cell-hide-on-small">
              <Dropdown label='<i class="bi bi-three-dots-vertical"></i>' label-only :options="[
                { action: 'edit', label: 'Edit', record: record },
                { action: 'delete', label: 'Delete', record: record },
                { action: 'view', label: 'View Details', record: record },
              ]" @click="(option) => console.log(option)" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
</template>


<style scoped>
</style>