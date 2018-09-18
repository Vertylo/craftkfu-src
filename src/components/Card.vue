<template>
  <div :class="(child === 3 && c.get) ? 'getIt':''">
    <div class="flex-box card" :class="((child === 1 || child === 3) && c.job !== 0) ? 'card-recipe':''">
      <div class="flex-box">
        <div class="item-img flex-box" :style="'background-image:url('+require('../assets/img/items/'+c.img+'.png')+')'">
          <p v-if="c.job !== 0 && c.upgrade">
            <i class="fas fa-arrow-up"></i>
          </p>
          <p v-if="c.job !== 0 && c.nb > 1">x{{c.nb}}</p>
        </div>
        <div class="flex-col info">
          <div class="flex-box primary">
            <img :title="store.rarity.find(x => x.id === c.rarity).name[store.lang]" :src="require('../assets/img/rarity/'+c.rarity+'.png')"> {{c.name[store.lang]}}
            <template v-if="child === 3 || child === 2">
              x{{c.qt}}
            </template>
          </div>
          <span v-if="c.job !== 0" class="secondary">
            {{store.txt.lvl[store.lang]}} {{c.lvl}} - {{store.jobs.find(x => x.id === c.job).name[store.lang]}}
          </span>
          <span v-if="child === 2 && c.job === 0" class="secondary">
            {{store.types.find(x => x.id === c.type).name[store.lang]}}
          </span>
        </div>
      </div>
      <div class="right">
        <i v-if="(child === 1 || child === 3) && c.job !== 0 && c.ingredients.length > 1" class="fas fa-swatchbook" :title="store.txt.switch[store.lang]" @click.self.stop="c.switchRecipe()"></i>
        <input v-if="child === 1" type="number" v-model="val" min="1" max="999" @change="checkQt(c)">
        <a v-if="child === 2" :href="store.txt.link[store.lang] + c.id + '-wakfu'" target="_blank" class="fas fa-link"></a>
        <i v-if="c.job !== 0 && child === 3" :class="!c.get ? 'fas fa-thumbs-down':'fas fa-thumbs-up'" :title="store.txt.showRecipe[store.lang]" @click.self.stop="c.get = !c.get"></i>
        <i v-if="child === 1" class="fas fa-chevron-circle-down" :style="!show ? 'transform:rotate(0.75turn)':''" :title="store.txt.showRecipe[store.lang]" @click.self.stop="show = !show"></i>
        <i v-if="child === 1" class="fas fa-times-circle" :title="store.txt.del1[store.lang] + c.name[store.lang] + store.txt.del2[store.lang]" @click.self.stop="store.list.remove(c)"></i>
        <i v-if="child === 0" class="fas fa-cart-arrow-down" :title="store.txt.addCraft1[store.lang] + c.name[store.lang] + store.txt.addCraft2[store.lang]" @click.self.stop="store.list.add(c)"></i>
      </div>
    </div>
    <template v-if="c.job !== 0">
      <animslide>
        <div v-if="(child === 1 && show === true) || (child === 3 && !c.get)" class="card-little">
          <card :c="cr" :child="3" v-for="cr in c.ingredients[c.recipe]" :key="cr.id"></card>
        </div>
      </animslide>
    </template>
  </div>
</template>

<script>
import { store } from "../assets/js/Store";
import animslide from "./Animslide";
export default {
  name: "Card",
  components: { store, animslide },
  props: ["c", "child", "show"],
  data() {
    return {
      store: store.state,
      val: 1
    };
  },
  methods: {
    checkQt(c) {
      if (this.val <= 0 || this.val > 999 || this.val === "") this.val = 1;
      c.changeQt(this.val);
    }
  }
};
</script>

<style>
.card {
  background: #f0f3f6;
  margin-top: 5px;
  border-radius: 5px;
  padding: 3px 10px 3px 5px;
}

.card-recipe {
  background: #bbebde;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
}

.card-recipe i:hover {
  color: rgb(0, 0, 0);
}

.item-img {
  background-size: cover;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 35px;
  height: 35px;
}

.item-img p,
.item-img i {
  position: relative;
  font-size: 0.7rem;
  top: -3px;
  left: -5px;
}

.info {
  margin-left: 8px;
}

.primary {
  justify-content: flex-start;
  line-height: 1.5rem;
}

.primary img {
  width: 0.9rem;
  margin-right: 5px;
}

.secondary {
  font-size: 0.9rem;
}

.right {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.right input {
  margin-right: 5px;
  margin-left: 10px;
  width: 55px;
  height: 30px;
}

.right input:focus,
.right a:focus {
  border: none;
  outline: none;
}

.card-little {
  border-left: #bbebde 2px solid;
  padding-left: 7px;
  padding-top: 5px;
  margin-top: -5px;
}

.card-little .card {
  padding: 0px 0;
  padding-right: 10px;
}

.card-little .item-img {
  width: 27px;
  height: 27px;
}

.card-little,
.card-little .secondary {
  font-size: 0.85rem;
  line-height: 1rem;
}

.card-little img {
  width: 0.8rem;
}

.getIt {
  filter: grayscale(100%);
}
</style>


