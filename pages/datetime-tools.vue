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
import {globals} from "~/library/stores/globals"
import {FieldIO, IFieldIO} from "~/library/forms/FieldIO.class";

const title = ref('Date/Time Tools')
globals.pageTitle = title.value

interface IFieldIO<T> {
  listener: (e: Event) => void
  input: Ref<T>
  output: ComputedRef<T>
  mutators?: object
  mutation: Ref<T>
}

class FieldIO {
  constructor(
    mutators: any,
  ) {
    this.mutators = {
      return: (v: string) => v,
      ...mutators,
    }
  }
  listener(e: Event): void {
    this.input.value = (e.target as HTMLInputElement).value
  }
  input: Ref<string> = ref('')
  output: ComputedRef<string> = computed<string>((): string => {
    return this.mutators[this.mutation.value](this.input.value)
  })
  mutators?: object
  mutation: Ref<string> = ref('return')
}

const formatter: IFieldIO<string> = new FieldIO(
  {
    mutate(v: string) { return v.toString() }
  }
)
</script>
