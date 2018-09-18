import data from "./Data.json";

class List {
  constructor() {
    this.crafts = [];
  }

  add(c) {
    if (!this.crafts.find(x => x.id === c.id)) {
      this.crafts.push(new Craft(c, 1));
    }
  }

  remove(c) {
    this.crafts.splice(this.crafts.indexOf(c), 1);
  }
}

class Craft {
  constructor(craft, qt) {
    this.qtBase = Math.ceil(qt / craft.nb);
    this.qt = this.qtBase;
    this.id = craft.id;
    this.name = craft.name;
    this.img = craft.img;
    this.rarity = craft.rarity;
    this.xp = craft.xp;
    this.job = craft.job;
    this.lvl = craft.lvl;
    this.nb = craft.nb;
    this.upgrade = craft.upgrade;
    this.recipe = 0;
    this.get = false;
    this.ingredients = new Array(craft.ingredients.length);
    craft.ingredients.forEach((ings, i) => {
      this.ingredients[i] = [];
      ings.forEach((ing, k) => {
        let newIng = data.find(x => x.id === ing.id);
        if (newIng.job !== 0) {
          this.ingredients[i][k] = new Craft(newIng, ing.qt * this.qt);
        } else {
          this.ingredients[i][k] = new Ingredient(newIng, ing.qt * this.qt);
        }
      });
    });
  }

  changeQt(qt) {
    this.qt = qt * Math.ceil(this.qtBase / this.nb);
    this.ingredients.forEach(mats => {
      mats.forEach(mat => {
        mat.qt = mat.qtBase * qt;
        if (mat.job !== 0) mat.changeQt(qt);
      });
    });
  }

  switchRecipe() {
    if (this.ingredients.length > 1) {
      this.recipe =
        this.recipe + 1 === this.ingredients.length ? 0 : this.recipe + 1;
    }
  }

  getMats(arr) {
    this.ingredients[this.recipe].forEach(mat => {
      if (mat.job === 0) {
        let check = arr.find(x => x.id === mat.id);
        if (check === undefined) arr.push(new Ingredient(mat, mat.qt));
        else check.qt += mat.qt;
      } else if (mat.get === false) {
        mat.getMats(arr);
      }
    });
  }
}

class Ingredient {
  constructor(ingredient, qt) {
    this.qtBase = qt;
    this.qt = qt;
    this.id = ingredient.id;
    this.name = ingredient.name;
    this.img = ingredient.img;
    this.rarity = ingredient.rarity;
    this.type = ingredient.type;
    this.job = 0;
  }

  addQt(qt) {
    this.qt += qt;
  }
}

export { List };
