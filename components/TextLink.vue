<template>
  <a
    :href="href"
    :target="target"
    class="text-green-500 hover:underline"
  >
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: "TextLink",
  props: {
    href: String,
    target: {
      type: String,
      default: "_self",
    }
  }
}
</script>
