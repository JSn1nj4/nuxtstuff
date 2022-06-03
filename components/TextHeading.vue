<template>
  <component :is="type" :class="classes ?? typeClasses[type]">
    <slot />
  </component >
</template>

<script setup lang="ts">
import {defineProps} from "@vue/runtime-core";

const props = withDefaults(defineProps<{
    type?: string
    classes?: string,
  }>(),
  {
    type: 'h1',
  }
)

const typeClasses: object = {
  h1: 'text-4xl leading-7 font-semibold',
  h2: 'text-2xl leading-7 font-semibold',
}
</script>
