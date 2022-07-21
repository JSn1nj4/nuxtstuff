<template>
  <div class="input-group mb-4 last:mb-0">
    <label :for="id">
      <TextHeading type="h4">
        <slot />
      </TextHeading>
    </label>
    <textarea
      v-if="type === 'textarea'"
      :id="id"
      :name="name"
      :disabled="disabled"
      :class="classes"
      :value="value"
      @keyup="keyupHandler"
    />
    <input
      v-else
      :class="classes"
      :disabled="disabled"
      :id="id"
      :name="name"
      :type="type"
      :value="value"
      @keyup="keyupHandler"
    />
  </div>
</template>

<script setup lang="ts">

import {ComputedRef, Ref} from "@vue/reactivity";

type TextField =
  | "email"
  | "number"
  | "password"
  | "tel"
  | "text"
  | "textarea"

const props = withDefaults(defineProps<{
  disabled?: boolean,
  keyupHandler?: Function,
  id?: string,
  name?: string,
  type?: TextField,
  value?: ComputedRef | Ref,
}>(), {
  disabled: false,
  type: 'text'
})

const classes = computed(() => {
  // Classes all input fields should share
  const base = [
    'w-full',
    'border-2',
    'border-solid',
    'rounded p-2',
  ]

  const textarea = [
    'h-36',
  ]

  // Enabled field classes
  const enabled = [
    'transition-colors',
    'duration-300',
    'border-slate-300',
    'dark:border-slate-500',
    'hover:border-slate-800',
    'dark:hover:border-slate-400',
    'bg-slate-100',
    'dark:bg-slate-600',
  ]

  // Disabled field classes
  const disabled = [
    'border-slate-200',
    'dark:border-slate-600',
    'bg-slate-100',
    'dark:bg-slate-700',
    'text-slate-500',
    'dark:text-slate-400',
  ]

  // Build class string
  return [
    ...base,
    ...(props.disabled ? disabled : enabled),
    ...(props.type === 'textarea' ? textarea : [])
  ].join(' ')
})
</script>
