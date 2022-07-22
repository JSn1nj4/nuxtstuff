<template>
  <div class="mt-4 bg-white dark:bg-slate-700 overflow-hidden shadow sm:rounded-lg p-6">
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" content="A collection of mini Vue projects" />
    </Head>
    <TextHeading type="h2" class="text-slate-900 dark:text-slate-50 mb-3 font-normal">
      Simple text-formatting tools to help transform content
    </TextHeading>
     <div class="block sm:grid sm:grid-cols-3 gap-10 text-slate-800 dark:text-white mt-4 pt-4 border-t-2 border-t-emerald-500 border-dashed">
      <div class="mt-0.5 mb-4 sm:mb-0">
        <FormRadioGroup :list="radioList" name="transform" text-size="text-lg" :click-handler="setFilter" />
      </div>
      <div class="col-span-2">
        <FormInputGroup
          id="text-formatter-input"
          :keyup-handler="setInput"
          name="text-formatter-input"
          type="textarea"
        >
          Input
        </FormInputGroup>
        <FormInputGroup
          disabled
          id="text-formatter-output"
          name="text-formatter-output"
          type="textarea"
          :value="output"
        >
          Output
        </FormInputGroup>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {globals} from "~/library/stores/globals";
import {ComputedRef} from "@vue/reactivity";

const title = ref('Text Tools')

globals.pageTitle = title.value

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
const output: ComputedRef<string> = computed((): string => filter.value(input.value))

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
