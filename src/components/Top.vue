<template>
  <header class="flex-box">
    <div>
      logo
    </div>

    <div :style="'background-image:url(' + require('../assets/img/lang.png') + ')'" class="lang" :class="'lang-' + store.lang" @click.self.stop="show = !show">
      <animslide>
        <div class="ch-lang" v-if="show">
          <div :style="'background-image:url(' + require('../assets/img/lang.png') + ')'" class="lang lang-0" @click.self.stop="chLang(0)"></div>
          <div :style="'background-image:url(' + require('../assets/img/lang.png') + ')'" class="lang lang-1" @click.self.stop="chLang(1)"></div>
          <div :style="'background-image:url(' + require('../assets/img/lang.png') + ')'" class="lang lang-2" @click.self.stop="chLang(2)"></div>
          <div :style="'background-image:url(' + require('../assets/img/lang.png') + ')'" class="lang lang-3" @click.self.stop="chLang(3)"></div>
        </div>
      </animslide>
    </div>
  </header>
</template>

<script>
import { store } from "../assets/js/Store";
import animslide from "./Animslide";
export default {
  name: "Top",
  components: { animslide },
  data() {
    return {
      store: store.state,
      show: false
    };
  },
  methods: {
    chLang(id) {
      this.store.lang = id;
      this.show = !this.show;
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
  position: relative;
  background-size: cover;
  width: 32px;
  height: 21px;
}

.ch-lang {
  position: absolute;
  background: #53c4b8;
  width: 64px;
  top: 50px;
  right: -16px;
  padding-top: 20px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-top: none;
}

.ch-lang .lang {
  margin: auto;
  margin-bottom: 20px;
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



