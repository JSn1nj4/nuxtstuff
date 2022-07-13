<template>
  <component :is="type" class="leading-7 font-semibold" :class="classes ?? typeClasses[type]">
    <slot />
  </component >
</template>

<script setup lang="ts">
import {defineProps} from "@vue/runtime-core";

const props = withDefaults(defineProps<{
  classes?: string,
  type?: string
}>(), {
  type: 'h1',
})

const typeClasses: object = {
  h1: 'text-4xl',
  h2: 'text-2xl',
  h3: 'text-xl',
}
</script>
