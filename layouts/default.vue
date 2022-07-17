<template>
  <div
    class="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0"
  >
    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
      <Logo />
      <PageTitle v-if="routeName">{{ routeName }}</PageTitle>
      <slot />
      <div class="flex justify-center pt-4 space-x-2">
        <IconsGithubIcon />
        <IconsTwitterIcon />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ComputedRef} from "@vue/reactivity";

const route = useRoute()

const routeName: ComputedRef<string | null> = computed(() => {
  const blacklist = [
    'index',
  ]

  const name: string = useRoute().name as string

  if(!name || name.length < 1) return null

  return blacklist.includes(name) ? null : name
})

console.log(route)
</script>
