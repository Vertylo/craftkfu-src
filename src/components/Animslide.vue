<template>
  <transition v-bind:css="false" @enter="enter" @leave="leave">
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name: "Animslide",
  methods: {
    enter(el, done) {
      Velocity(el, "slideDown", { duration: "300", complete: done });
    },
    leave(el, done) {
      Velocity(el, "slideUp", { duration: "300", complete: done });
    }
  }
};
</script>


