import type { Module } from 'vuex'
import type { MainState } from '@/store'

export interface GoodsState {
    name: string,
    price: number,
    inventory: number
}

const state: GoodsState = {
    name: 'goods',
    price: 100,
    inventory: 8
}

export const goodsStore: Module<GoodsState, MainState> = {
    state
}