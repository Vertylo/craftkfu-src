<template>
  <section>
    <div class="section-head">
      <h2>{{store.txt.step[store.lang]}}</h2>
    </div>
    <div class="section-body">
      <div class="toolbar flex-box">
        <p v-if="store.list.crafts.length === 0">{{store.txt.noCraft[store.lang]}}</p>
        <p v-else>{{store.list.crafts.length}} {{store.plurial(store.list.crafts.length > 1, store.txt.craft[store.lang])}}</p>
        <div v-if="store.list.crafts.length > 0">
          <i class="fas fa-arrows-alt-v" :title="store.txt.slide[store.lang]" @click.self.stop="show = !show"></i>
          <i :title="store.txt.erase[store.lang]" class="fas fa-eraser" @click.self.stop="store.list.crafts = []"></i>
        </div>
      </div>
      <card :c="c" :show="show" :child="1" v-for="c in store.list.crafts" :key="c.id"></card>
    </div>
  </section>
</template>

<script>
import { store } from "../assets/js/Store";
import card from "./Card";
export default {
  name: "Step",
  components: { card },
  data() {
    return {
      store: store.state,
      show: false
    };
  }
};
</script>

<style>
</style>



