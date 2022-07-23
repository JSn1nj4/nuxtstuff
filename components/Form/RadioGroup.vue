<template>
  <div class="form-radio-group">
    <FormRadioButton
      v-for="(radio, index) in list"
      key="index"
      :class="{
        [textSize]: !!textSize,
        [spacing]: !!spacing,
        'last:mb-0': list.length > 1 && index === list.length - 1
      }"
      :id="radio.id"
      :name="name"
      :value="radio.value"
    >
      {{ radio.label }}
    </FormRadioButton>
  </div>
</template>

<script setup lang="ts">
import {BorderBottom} from "~/library/types/spacing";
import {TextSize} from "~/library/types/typography";

interface RadioList {
  label: string
  id: string
  value: string
}

const props = withDefaults(defineProps<{
  list: RadioList[],
  name: string,
  spacing?: BorderBottom,
  textSize?: TextSize,
}>(), {
  spacing: 'mb-1',
  textSize: "text-md"
})
</script>
