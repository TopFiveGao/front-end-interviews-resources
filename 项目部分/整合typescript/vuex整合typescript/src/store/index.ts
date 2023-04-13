import type { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import { userStore, type UserState } from '@/store/modules/userStore'
import { goodsStore, type GoodsState } from '@/store/modules/goodsStore'


export interface MainState {
    count: number,
}

// 这个类型用于注入key中， 来实现 store 【所有模块】的 state 类型提示
interface State extends MainState {
    userStore: UserState,
    goodsStore: GoodsState,
}


export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<MainState>({
    state: {
        count: 0
    },
    modules: {
        userStore,
        goodsStore
    }
})

// define your own `useStore` composition function
export function useStore() {
    return baseUseStore(key)
}