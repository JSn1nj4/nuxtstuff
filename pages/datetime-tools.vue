<template>
  <div class="mt-4 bg-white dark:bg-slate-700 overflow-hidden shadow sm:rounded-lg p-6">
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" content="A collection of mini Vue projects" />
    </Head>
    <TextHeading type="h2" class="text-slate-900 dark:text-slate-50 mb-3 font-normal">
      Tools for working with date/time strings and timestamps
    </TextHeading>
     <div class="block sm:grid sm:grid-cols-3 gap-10 text-slate-800 dark:text-white mt-4 pt-4 border-t-2 border-t-emerald-500 border-dashed">
       <div class="col-span-3">
         <TextHeading type="h3" class="text-slate-900 dark:text-slate-50">
           Format Conversion
         </TextHeading>
       </div>
       <div class="mt-0.5 mb-4 sm:mb-0">
         <FormRadioGroup :list="dateFormatRadioList" name="transform" text-size="text-lg" @change="dateFormatter.setFilter($event)" />
       </div>
       <div class="col-span-2">
         <FormInputGroup
           id="date-formatter-input"
           name="date-formatter-input"
           @keyup="dateFormatter.setValue($event)"
         >
           Input
         </FormInputGroup>
         <FormInputGroup
           disabled
           id="date-formatter-output"
           name="date-formatter-output"
           :value="dateFormatter.output"
         >
          Output
         </FormInputGroup>
       </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {globals} from "~/library/stores/globals"
import {FieldIO, IFieldIO} from "~/library/forms/FieldIO.class"
import getUnixTime from 'date-fns/getUnixTime'

const title = ref('Date/Time Tools')
globals.pageTitle = title.value

const dateFormatter: IFieldIO<string> = new FieldIO({
  unix(v: string ): string {

    // Assumed input is integer, which is already a valid Unix timestamp
    let int = parseInt(v)
    if(int.toString().length === v.length) {
      return int.toString()
    }

    // Assumed date string, which can be converted to Unix timestamp
    let unix: number = getUnixTime(new Date(v))
    if(!isNaN(unix)) {
      return unix.toString()
    }

    console.log(`Cannot parse to Unix timestamp. Result: ${unix}`)
    return v
  }
})

const dateFormatRadioList = [
  { label: 'Input', id: 'default', value: 'default', checked: true },
  { label: 'Unix Timestamp', id: 'unix', value: 'unix' },
]
</script>
