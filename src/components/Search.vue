<template>

  <section>

    <input  placeholder="Recherche..." type="text" v-model="search">
    <input type="text" value="Forestier">
    <input type="number" v-model="minLvl" min="0" :max="maxLvl">
    <input type="number" v-model="maxLvl" :min="minLvl" max="130">


    <button @click="foo()">Toggle</button>
    <button @click="bar()">Toggle</button>
    {{ store.list.crafts }}
    <div :key="c.id" v-for="c in getResults">
      <img :src="require('../assets/img/items/10114670.png')">
      {{ c.name[store.lang] }}
    </div>

  </section>

</template>

<script>

  import { data } from '../assets/js/Data'
  import { store } from '../assets/js/Store'

  export default {

    name:'Search',

    data () {
      return {
        store: store.state,
        search: '',
        minLvl: 0,
        maxLvl: 130
      }
    },

    computed: {
      getResults () {
        if (this.search.length > 0) {
          return data.filter(x => x.lvl >= this.minLvl && x.lvl <= this.maxLvl && x.name[this.store.lang].toLowerCase().includes(this.search.toLowerCase())).sort(function(a,b) {return a.lvl - b.lvl})
        }
      }
    },

    methods: {
      foo () {
        this.store.list.add(data.find(x => x.id === 25080))
      },

      bar () {
        this.store.list.remove(data.find( x => x.id === 25080))
      }
    }
  }

</script>

<style>

</style>