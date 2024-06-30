<script setup>
  
  const props = defineProps({
    id: String,
    label: String,
    type: {
      type: String,
      default: 'text'
    },
    error: String,
    help: String
  });
  
 
 const modelValue = defineModel()

 </script>
  
  
  <template>
    <div>
      <label v-if="label" :for="id" class="form-label">{{ label }}</label>
      <input :placeholder="$attrs.placeholder" v-model="modelValue" :type="type" :id="id" class="form-control"
          :class="{ 'is-invalid': error }">
      <div v-if="error" class="invalid-feedback">
          {{ error }}
      </div>
      <div v-if="help" class="form-text">{{ help }}</div>
    </div>
  </template>
  
  