<template>
  <div class="mt-4 bg-white dark:bg-slate-700 overflow-hidden shadow sm:rounded-lg p-6">
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" content="A collection of mini Vue projects" />
    </Head>
    <TextHeading type="h2" class="text-slate-900 dark:text-slate-50 mb-3 font-normal">
      Tools for working with date/time strings and timestamps
    </TextHeading>
     <div class="block sm:grid sm:grid-cols-2 gap-10 text-slate-800 dark:text-white mt-4 pt-4 border-t-2 border-t-emerald-500 border-dashed">
       <div class="col-span-2">
         <TextHeading type="h3" class="text-slate-900 dark:text-slate-50">
           Convert format
         </TextHeading>
       </div>
       <div>
         <FormInputGroup
           id="date-formatter-input"
           :keyup-handler="formatter.listener"
           name="date-formatter-input"
         >
           Input
         </FormInputGroup>
         <FormInputGroup
           disabled
           id="date-formatter-output"
           name="date-formatter-output"
           type="textarea"
           :value="formatter.output"
         >
          Output
         </FormInputGroup>
       </div>
       <div>

       </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {globals} from "~/components/_stores/globals";
import {ComputedRef, Ref} from "@vue/reactivity";

const title = ref('Date/Time Tools')
globals.pageTitle = title.value

// interface MutatorCollection<T> {
//   (v: T): T
// }

interface FieldIO<T> {
  listener: (e: Event) => void
  input: Ref<T>
  output: ComputedRef<T>
  // mutators?: MutatorCollection<T>
}

const formatter: FieldIO<string> = {
  listener(e: Event): void {
    this.input.value = (e.target as HTMLInputElement).value
  },
  input: ref(''),
  output: computed((): string => '')
  // mutators: {
  //   mutate(v: string) => v.toString()
  // },
}
</script>
