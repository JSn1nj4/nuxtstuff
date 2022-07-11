<template>
  <div>
    <input :id="id" type="radio" :name="name" :value="value" class="mr-2">
    <label :for="id">
      <slot />
    </label>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  id: string,
  name: string,
  value: string,
}>()
</script>
