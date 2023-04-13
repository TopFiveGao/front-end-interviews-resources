import type { Module } from "vuex";
import type { MainState } from "@/store";

export interface UserState{
    name: string,
    age: number,
    points?: number
}

const state: UserState = {
    name: 'vip用户',
    age: 20,
    points: 1000
}

export const userStore:Module<UserState, MainState> = {
    state,
    namespaced:true
}