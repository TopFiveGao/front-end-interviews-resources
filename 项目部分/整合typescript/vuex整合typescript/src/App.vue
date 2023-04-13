<script setup lang="ts">
import { computed } from 'vue';
import Greet from './components/Greet.vue'
import { useStore } from '@/store';


const store = useStore()
const name = computed(() => (store.state.goodsStore.name))
const price = computed(() => (store.state.goodsStore?.price))
const inventory = computed(() => (store.state.goodsStore?.inventory))
const user = computed(() => (store.state.userStore?.name))
const age = computed(() => (store.state.userStore?.age))
const points = computed(() => (store.state.userStore?.points))


</script>

<template>
  <header>
    <div>
      <Greet msg="You did it!" />
    </div>
    <div>
      userStore: {{ user }} goodsStore: {{ name }}
    </div>
    <div>
      userStore: {{ age }} goodsStore: {{ price }}
    </div>
    <div>
      userStore: {{ points }} goodsStore: {{ inventory }}
    </div>
    {{ store.state.count }}
  </header>
</template>

<style scoped></style>
