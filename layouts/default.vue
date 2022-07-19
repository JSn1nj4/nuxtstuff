<template>
  <div
    class="relative flex flex-col items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0"
  >
    <div class="max-w-4xl w-full mx-auto sm:px-6 lg:px-8 pb-4 block sm:flex gap-8 justify-between">
      <Logo />
      <nav class="h-auto flex flex-row gap-8 mt-8 sm:mt-0 text-slate-70 dark:text-slate-300 justify-center sm:justify-end-end">
        <NuxtLink v-for="link in links" :href="link.href" :target="link.target" class="h-full text-2xl flex flex-col justify-end hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">{{ link.name }}</NuxtLink>
        <IconsGithubIcon href="https://github.com/JSn1nj4/nuxtstuff" title="GitHub Repository" class="h-full flex flex-col justify-end hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors" />
      </nav>
    </div>
    <div class="max-w-4xl w-full mx-auto sm:px-6 lg:px-8">
      <PageTitle v-if="routeName">{{ routeName }}</PageTitle>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import {ComputedRef} from "@vue/reactivity";
import {Target} from "~/components/_types/html-attributes";

interface NavLink {
  name: string
  href: string
  target?: Target
}

const route = useRoute()

const links: NavLink[] = [
  { name: 'About', href: '/about', },
  { name: 'Developer', href: 'https://elliotderhay.com', target: "_blank", },
]

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
