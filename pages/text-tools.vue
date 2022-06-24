<template>
  <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
    <Head>
      <Title>{{title}}</Title>
      <Meta name="description" content="A collection of mini Vue projects" />
    </Head>
    <PageTitle :title="title" />
    <div class="mt-8 bg-white dark:bg-slate-700 overflow-hidden shadow sm:rounded-lg p-6">
      <TextHeading type="h2" class="text-teal-900 dark:text-teal-100 mb-3">
        Simple text-formatting tools to help transform content
      </TextHeading>
      <TextHeading type="h3" class="text-teal-800 dark:text-teal-200">
        Text transforming tools
      </TextHeading>
      <div class="grid grid-cols-3 gap-4 dark:text-white">
        <div class="dark:bg-slate-500">Uppercase</div>
        <div class="col-span-2 dark:bg-slate-500"><input type="text" class="w-full" /></div>
        <div class="dark:bg-slate-500">Lowercase</div>
        <div class="col-span-2 dark:bg-slate-500"><input type="text" class="w-full" /></div>
      </div>
    </div>
    <div class="flex justify-center pt-4 space-x-2">
      <IconsGithubIcon />
      <IconsTwitterIcon />
    </div>
  </div>
</template>

<script lang="ts" setup>
const title = ref('Text Tools')
</script>
