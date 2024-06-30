<template>
    <div :class="divClass">
      <table :class="tableClasses">
        <thead>
          <tr>
            <th v-for="(column, index) in columns" :key="index" :class="column.class">
              {{ column.label }}
            </th>
          </tr>
        </thead>
        <tbody :class="tbodyClass">
          <tr v-for="(record, index) in data" :key="index">
            <td v-for="column in columns" :class="column.class">
              <slot :name="column.key" :record="record">
                {{ record[column.key] }}
              </slot>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const props = defineProps({
    data: {
      type: Array,
      required: true
    },
    columns: {
      type: Array,
      required: true
    },
    divClass: {
      type: String,
      default: 'table-responsive'
    },
    tableClasses: {
      type: String,
      default: 'table table-hover table-borderless'
    },
    tbodyClass: {
      type: String,
      default: 'table-group-divider'
    }
  });
  </script>