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
       <div class="grid grid-cols-3 gap-10 dark:text-white mt-4 pt-4 border-t-2 border-t-teal-500 border-dashed">
        <div class="dark:bg-slate-500 mt-0.5">
          <FormRadioGroup :list="radioList" name="transform" text-size="text-lg" />
        </div>
        <div class="col-span-2 dark:bg-slate-500">
          <TextHeading type="h4" class="text-slate-900 dark:text-slate-400">Input</TextHeading>
          <textarea type="text" class="w-full border-2 border-solid border-slate-400 rounded mb-4" />
          <TextHeading type="h4" class="text-slate-900 dark:text-slate-400">Output</TextHeading>
          <div type="text" class="w-full border-2 border-solid border-slate-300 rounded h-36"></div>
        </div>
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

const radioList = [
  { label: 'Capitalize', id: 'capitalize', value: 'capitalize', },
  { label: 'UPPERCASE', id: 'uppercase', value: 'uppercase', },
  { label: 'lowercase', id: 'lowercase', value: 'lowercase', },
  { label: 'Title Case', id: 'titlecase', value: 'titlecase', },
  { label: 'Encode for URL', id: 'urlencode', value: 'urlencode', },
  { label: 'Decode URL-encoded', id: 'urldecode', value: 'urldecode', },
]
</script>
