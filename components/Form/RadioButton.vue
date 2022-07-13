<template>
  <div>
    <input :id="id" type="radio" :name="name" :value="value" class="mr-2" @change="clickHandler">
    <label :for="id">
      <slot />
    </label>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  clickHandler?: Function,
  id: string,
  name: string,
  value: string,
}>()
</script>
