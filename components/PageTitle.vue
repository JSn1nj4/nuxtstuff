<template>
  <a
    class="flex justify-center pt-8 sm:pt-0"
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
  title?: string,
  href?: string,
  }>(),
  {
    title: 'NuxtStuff',
    href: '/',
  }
)
</script>
