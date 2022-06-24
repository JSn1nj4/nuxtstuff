<template>
  <a
    :href="href"
    :target="target"
    class="text-green-500 hover:underline"
  >
    <slot></slot>
  </a>
</template>

<script lang="ts" setup>
const props = withDefaults(defineProps<{
  href: string,
  target?: string
}>(), {
  target: '_self',
})
</script>
