<!-- Please remove this file from your project -->
<template>
  <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
    <a
      class="flex justify-center pt-8 sm:pt-0"
      href="/"
      target="_blank"
    >
      <h1 class="text-4xl leading-7 font-semibold">
        NuxtStuff
      </h1>
    </a>
    <div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">
      <h2 class="text-2xl leading-7 font-semibold">
        A collection of front-end mini projects built in Nuxt
      </h2>
      <p class="mt-3 text-gray-600">
        Have a look around! If something is broken or you have a suggestion, feel free to open an
        <TextLink href="https://github.com/JSn1nj4/nuxtstuff/issues" target="_blank">issue</TextLink>
        or submit a
        <TextLink href="https://github.com/JSn1nj4/nuxtstuff/pulls" target="_blank">pull request</TextLink>.
      </p>
    </div>
    <div class="flex justify-center pt-4 space-x-2">
      <GithubIcon />
      <TwitterIcon />
    </div>
  </div>
</template>

<script lang="ts" setup>
import GithubIcon from '~/components/icons/GithubIcon.vue'
import TwitterIcon from '~/components/icons/TwitterIcon.vue'
</script>
