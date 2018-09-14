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
      Velocity(el, "slideDown", { duration: "fast", complete: done });
    },
    leave(el, done) {
      Velocity(el, "slideUp", { duration: "fast", complete: done });
    }
  }
};
</script>


