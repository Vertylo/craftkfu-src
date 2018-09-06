import { List } from './Class'

class Store {
  constructor () {
    this.state = {
      lang: 0,
      list: new List()
    }
  }
}

let store = new Store()

export { store }