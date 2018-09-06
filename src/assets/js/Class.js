class List {
  constructor () {
    this.crafts = []
  }

  add (c) {
    if (!this.crafts.find(x => x.id === c.id))
      this.crafts.push(new Craft(c))
  }

  remove (c) {
    this.crafts.splice(this.crafts.indexOf(c), 1)
  }
}

class Craft {
  constructor (c) {
    this.id = c.id
    this.name = c.name
    this.lvl = c.lvl
    this.job = c.job
    this.nb = c.nb
    this.img = c.img
    this.xp = c.xp
    this.rarity = c.rarity
  }
}

export {List}