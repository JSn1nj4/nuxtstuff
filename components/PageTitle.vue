<template>
  <a
    class="flex justify-center pt-8 sm:pt-0 text-emerald-700 dark:text-emerald-400"
    :href="href"
    target="_blank"
  >
    <TextHeading>
      {{ title }}
    </TextHeading>
  </a>
</template>

<script setup lang="ts">
import {defineProps} from "@vue/runtime-core";

const props = withDefaults(defineProps<{
  href?: string,
  title?: string,
}>(), {
  href: '/',
  title: 'NuxtStuff',
})
</script>
