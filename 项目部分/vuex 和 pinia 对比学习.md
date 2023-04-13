# 概述
### vuex 和 pinia 都是专门为 vue 开发的状态管理工具。
### 既为 vue 而开发，那么我们就要思考如何在 vue 中使用。
### 而 vue 的特色就是单文件组件，那么我们就应该思考它如何在**vue文件**中使用。
### 下面就简单说下使用思路。 
&nbsp;
## 状态库使用方式
1. 在 vue 实例对象上挂载 **状态库对象** 自身实例。
```javascript
// main.js
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createStore } from 'vuex'
import App from '@/App.vue'


const store = createStore({
    state(){
        return {
            count: 100
        }
    },
    mutations: {
        increment (state) {
            state.count++
        }
  }
  // ... actions, getters, modules
})

createApp(App)
  .use(store)
//.use(createPinia())  // pinia 就是 vuex5 , 它删减了 mutations 等等繁杂的核心概念, 更加方便使用
  .mount('#root')

// store.js
import { defineStore } from 'pinia'


export const useCount = defineStore('count', {
    state: ()=>({
        count: 10,
        name: 'john',
        haveMoney: true
    }),
    // actions, getters
})
```

2. 在 **vue** 单文件中的 script 标签中调用 **状态库对象** 
```html
<script setup>

import { useCount } from 'store'
import { storeToRefs } from 'pinia'

const { count, name } = useCount()

</script>
```

