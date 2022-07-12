<template>
  <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" content="A collection of mini Vue projects" />
    </Head>
    <PageTitle :title="title" />
    <div class="mt-8 bg-white dark:bg-slate-700 overflow-hidden shadow sm:rounded-lg p-6">
      <TextHeading type="h2" class="text-slate-900 dark:text-emerald-200 mb-3">
        Simple text-formatting tools to help transform content
      </TextHeading>
      <TextHeading type="h3" class="text-emerald-800 dark:text-emerald-300">
        Text transforming tools
      </TextHeading>
       <div class="block sm:grid sm:grid-cols-3 gap-10 dark:text-white mt-4 pt-4 border-t-2 border-t-emerald-500 border-dashed">
        <div class="mt-0.5 mb-4 sm:mb-0">
          <FormRadioGroup :list="radioList" name="transform" text-size="text-lg" :click-handler="setFilter" />
        </div>
        <div class="col-span-2">
          <TextHeading type="h4" class="text-emerald-700 dark:text-emerald-500">Input</TextHeading>
          <textarea type="text" class="w-full transition-colors border-2 border-solid border-slate-300 dark:border-slate-500 hover:border-slate-800 dark:hover:border-slate-400 rounded mb-4 p-2 bg-slate-100 dark:bg-slate-600 text-black dark:text-white" @keyup="setInput" />
          <TextHeading type="h4" class="text-emerald-700 dark:text-emerald-500">Output</TextHeading>
          <div class="w-full border-2 border-solid border-slate-200 dark:border-slate-600 rounded h-36 p-2 bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400">{{ output }}</div>
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
const mutators = {
  capitalize: (v: string): string => {
    return v.charAt(0).toUpperCase() + v.substring(1).toLowerCase()
  },
  uppercase: (v: string): string => v.toUpperCase(),
  lowercase: (v: string): string => v.toLowerCase(),
  titlecase: (v: string): string => {
    return v.split(' ').map(mutators.capitalize).join(' ')
  },
  urlencode: (v: string): string => encodeURIComponent(v),
  urldecode: (v: string): string => decodeURIComponent(v),
}

const input = ref('')
const filter = ref<Function>((v: string): string => v)
const output = computed((): string => filter.value(input.value))

function setInput(e: Event): void {
  input.value = (e.target as HTMLInputElement).value
}

function setFilter(e: Event): void {
  filter.value = mutators[(e.target as HTMLInputElement).value]
}

const radioList = [
  { label: 'Capitalize', id: 'capitalize', value: 'capitalize', },
  { label: 'UPPERCASE', id: 'uppercase', value: 'uppercase', },
  { label: 'lowercase', id: 'lowercase', value: 'lowercase', },
  { label: 'Title Case', id: 'titlecase', value: 'titlecase', },
  { label: 'URL-encode', id: 'urlencode', value: 'urlencode', },
  { label: 'URL-decoded', id: 'urldecode', value: 'urldecode', },
]
</script>
