<template>
  <a :href="href" :target="target">
    <svg
      class="'w-6 h-6 text-gray-600 hover:text-gray-800' + typeClass"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      aria-hidden="true"
      role="img"
      width="32"
      height="32"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
    >
      <slot></slot>
    </svg>
  </a>
</template>

<script>
export default {
  name: "IconWrapper",
  props: {
    href: {
      type: String,
      default: '/',
    },
    target: {
      type: String,
      default: '_blank',
    },
    type: {
      type: String,
      default: '',
    },
  },

  computed: {
    typeClass() {
      const classes = {
        github: 'button--github',
      };

      if(classes[this.type] === undefined) return '';

      return ' ' + classes[this.type];
    }
  }
}
</script>
