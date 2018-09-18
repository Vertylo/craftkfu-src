<template>
  <section>
    <div class="section-head">
      <h2>{{store.txt.shop[store.lang]}}</h2>
    </div>
    <div class="section-body">
      <div class="toolbar flex-box">
        <p v-if="store.list.crafts.length === 0">{{store.txt.noCraft[store.lang]}}</p>
        <p v-else>{{getQt}} {{store.txt.resource[store.lang]}}{{getIng.length > 1 ? "s":""}}</p>
        <div v-if="store.list.crafts.length > 0">
          <a :href="dlCsv" :title="store.txt.exportCsv[store.lang]" download="shopping.csv" class="fas fa-file-excel icon"></a>
          <a :href="dlTxt" :title="store.txt.exportTxt[store.lang]" download="shopping.txt" class="fas fa-file-alt icon"></a>
        </div>
      </div>
      <card :c="i" :child="2" v-for="i in getIng" :key="i.id"></card>
    </div>
  </section>
</template>

<script>
import { store } from "../assets/js/Store";
import card from "./Card";
export default {
  name: "Shop",
  components: { card },
  data() {
    return {
      store: store.state
    };
  },
  computed: {
    getIng() {
      let arr = [];
      this.store.list.crafts.forEach(el => {
        el.getMats(arr);
      });
      return arr.sort(function(a, b) {
        return a.type - b.type;
      });
    },

    getQt() {
      let allQt = 0;
      this.getIng.forEach(el => {
        allQt += el.qt;
      });
      return allQt;
    },

    dlTxt() {
      let stringify = "";
      this.getIng.forEach(el => {
        stringify += "- " + el.name[this.store.lang] + " x" + el.qt + "\n";
      });
      stringify += "\n\n";
      this.store.list.crafts.forEach(el => {
        stringify +=
          el.name[this.store.lang] +
          " x" +
          el.qt +
          " (" +
          this.store.jobs.find(x => x.id === el.job).name[this.store.lang] +
          " Niv. " +
          el.lvl +
          ")\n";
        stringify += this.getStep(el, "\t");
      });
      let data = new Blob([stringify], { type: "text/plain" });
      return window.URL.createObjectURL(data);
    },

    dlCsv() {
      let stringify = "";
      this.getIng.forEach(el => {
        stringify +=
          el.name[this.store.lang] +
          "," +
          el.qt +
          "," +
          this.store.rarity.find(x => x.id === el.rarity).name[
            this.store.lang
          ] +
          "\n";
      });
      stringify = "\uFEFF" + stringify;
      let data = new Blob([stringify], { type: "text/csv" });
      return window.URL.createObjectURL(data);
    }
  },
  methods: {
    getStep(c, tab) {
      var out = "";
      c.ingredients[c.recipe].forEach(el => {
        out += tab + el.name[this.store.lang] + " x" + el.qt;
        if (el.job === 0) out += "\n";
        else {
          out +=
            " ( " +
            this.store.jobs.find(x => x.id === el.job).name[this.store.lang] +
            " Niv." +
            el.lvl +
            ")\n";
          out += this.getStep(el, tab + "\t");
        }
      });
      return out;
    }
  }
};
</script>


