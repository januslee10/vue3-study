// 自定义vuex
import { inject, reactive } from 'vue'

const STORE_KEY = '__store__'
function useStore() {
  return inject(STORE_KEY)
}

function createStore(options) {
  return new Store(options)
}

class Store {
  constructor(options) {
    this._state = reactive({
      data: options.state(),
    })
    this._motations = options.motations
  }
}

export { createStore, useStore }
