<template>
  <header class="flex-box">
    <div>
      logo
    </div>

    <div :style="'background-image:url(' + require('../assets/img/lang.png') + ')'" class="lang" :class="'lang-' + store.lang" @click="getLang()">

    </div>
  </header>
</template>

<script>
import { store } from "../assets/js/Store";
export default {
  name: "Top",
  data() {
    return {
      store: store.state
    };
  },
  methods: {
    getLang() {
      if (this.store.lang === 3) this.store.lang = 0;
      else this.store.lang++;
      // localStorage.setItem("lang", this.store.lang);
    }
  }
  // mounted() {
  //   if (localStorage.lang) this.store.lang = localStorage.lang;
  // }
};
</script>

<style>
header {
  background: #53c4b8;
  width: 100%;
  height: 80px;
  padding: 0 60px;
  margin-bottom: 40px;
}

.lang {
  background: blue;
  background-size: cover;
  width: 32px;
  height: 21px;
}

.lang-0 {
  background-position-y: 0;
}

.lang-1 {
  background-position-y: 63px;
}

.lang-2 {
  background-position-y: 42px;
}

.lang-3 {
  background-position-y: 21px;
}
</style>



