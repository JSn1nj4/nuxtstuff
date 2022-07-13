<template>
  <NuxtLink
    :href="href"
    :target="target"
    class="transition-colors text-emerald-600 dark:text-emerald-500 hover:underline"
  >
    <slot></slot>
  </NuxtLink>
</template>

<script lang="ts" setup>
const props = withDefaults(defineProps<{
  href: string,
  target?: string
}>(), {
  target: '_self',
})
</script>
