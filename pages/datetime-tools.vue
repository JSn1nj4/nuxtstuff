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
         <p>Coming soon!</p>
       </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {globals} from "~/components/_stores/globals";

const title = ref('Date/Time Tools')

globals.pageTitle = title.value
</script>
