<template>
  <section>
    <div class="section-head">
      <h2>{{store.txt.searchTitle[store.lang]}}</h2>
    </div>
    <div class="section-body">
      <div class="flex-box">
        <a href="" class="jobs flex-box" :class="select ? 'jobs-select':''" @click.prevent.stop="select = !select">
          <p>{{store.jobs.find(x => x.id === job).name[store.lang]}}</p>
          <div class="unclick" v-if="select" @click.self.prevent.stop="select = !select"></div>
          <animslide>
            <div class="jobs-options flex-col" v-if="select">
              <a class="options flex-box" href="" v-for="j in store.jobs.filter(x => x.id !== job)" :key="j.id" @click.prevent.stop="changeJob(j.id)">
                {{j.name[store.lang]}}
              </a>
            </div>
          </animslide>
        </a>
        <div class="flex-box lvl">
          <input type="number" v-model="minLvl" min="0" :max="maxLvl" @change="checkLvl()">
          <input type="number" v-model="maxLvl" :min="minLvl" max="130" @change="checkLvl()">
        </div>
      </div>
      <input :placeholder="store.txt.searchTitle[store.lang] + '...'" type="text" v-model="search">
      <p v-if="getResults.length === 0">{{store.txt.noResult[store.lang]}}</p>
      <p v-else>{{getResults.length}} {{store.plurial(getResults.length > 1, store.txt.result[store.lang])}}</p>
      <!-- <animlist> -->
      <card :c="c" :child="0" v-for="(c, index) in getResults" :data-index="index" :key="c.id"></card>
      <!-- </animlist> -->
    </div>
  </section>
</template>

<script>
import { store } from "../assets/js/Store";
import data from "../assets/js/Data";
import card from "./Card";
import animslide from "./Animslide";
import animlist from "./Animlist";
export default {
  name: "Search",
  components: { card, animlist, animslide },
  data() {
    return {
      store: store.state,
      minLvl: 0,
      maxLvl: 130,
      job: -1,
      select: false,
      search: ""
    };
  },
  computed: {
    getResults() {
      if (this.search === "" && this.job === -1) return [];
      return data
        .filter(
          x =>
            x.job !== 0 &&
            !this.store.list.crafts.find(z => z.id === x.id) &&
            x.name[this.store.lang]
              .toLowerCase()
              .includes(this.search.toLowerCase()) &&
            (this.job === -1 ? true : this.job === x.job) &&
            x.lvl >= this.minLvl &&
            x.lvl <= this.maxLvl
        )
        .sort(function(a, b) {
          return a.lvl - b.lvl;
        });
    }
  },
  methods: {
    changeJob(id) {
      this.job = id;
      this.select = false;
    },
    changeToggle() {
      document.activeElement.blur();
      this.select = false;
    },
    checkLvl() {
      if (this.minLvl < 0 || this.minLvl > 130 || this.minLvl === "") {
        this.minLvl = 0;
      } else if (this.maxLvl < 0 || this.maxLvl > 130 || this.maxLvl === "") {
        this.maxLvl = 130;
      }
    }
  }
};
</script>

<style>
.jobs,
input {
  font-family: "PT Sans", sans-serif;
  height: 25px;
  border: 1px solid rgb(223, 226, 230);
  border-radius: 5px;
  font-size: 0.95rem;
  padding-left: 10px;
}

.jobs-options a:focus,
input:focus,
.jobs-select {
  border: 2px solid #53c4b8;
  padding-left: 9px;
}

.jobs,
.lvl {
  width: 49%;
}

.jobs {
  position: relative;
}

input[type="number"] {
  width: 48%;
  text-align: center;
}

input[type="text"] {
  width: 100%;
  margin: 15px 0;
}

.jobs-options {
  position: absolute;
  width: 100%;
  background: white;
  border: 2px solid #53c4b8;
  top: 21px;
  left: 0;
}
.unclick {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: transparent;
  z-index: 0;
}

.options,
.options:focus,
.options:hover {
  z-index: 9999;
  height: 25px;
  padding-left: 6px;
}

.options:focus,
.options:hover {
  background: #53c4b8;
  color: white;
  padding-left: 6px;
}
</style>



