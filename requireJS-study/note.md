- 模块加载顺序
`require.js` ==> `main.js` ==> `purchase.js` ==> `credits.js` ==> `products.js`

- 模块执行顺序
`main.js` ==> `credits.js` ==> `products.js` ==> `purchase.js`
运行结果：
```
Function : getCredits
Function : reserveProduct
Function : purchaseProduct
```

- 主模块配置
// 配置
```
require.config({
  // 指定模块的加载路径，以下写法是默认模块与main.js在同一个目录下
  /*
    还可以指定基目录
    baseUrl: 'js/lib'
  */
  path: {
    'moduleA': 'moduleA',
    'moduleB': 'moduleB',
    'moduleC': 'moduleC'
  },
  // moduleC是一个不符合AMD规范的模块
  shim: {
    'moduleC': {
      // 依赖
      deps: ['moduleA', 'moduleB'],
      // 输出形式
      exports: 'ModuleC'
    }
  }
})

require(['moduleA', 'moduleB', 'moduleC'], function(moduleA, moduleB, ModuleC) {
  moduleA.moA()
  moduleB.moB()
  ModuleC.moC()
})
```