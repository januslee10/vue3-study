let getDouble = (n) => n * 2
let obj = {}
let count = 1
let double = getDouble(count)

let proxyObj = new Proxy(obj, {
  get(target, prop) {
    console.log('get')
    return target[prop]
  },
  set(target, prop, value) {
    console.log('set')
    target[prop] = value
    if (prop === 'count') {
      double = getDouble(value)
    }
  },
  deleteProperty(target, prop) {
    console.log('deleteProperty')
    delete target[prop]
    if (prop === 'count') {
      double = NaN
    }
  },
})

console.log(obj.count, double)
proxyObj.count = 2
console.log(obj.count, double)
delete proxyObj.count // 删除属性后，我们打印log时，输出的结果就会是 undefined NaN
console.log(obj.count, double)
