<script setup>
import {onMounted} from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { useIdopontfoglalasStore } from '@/stores/idopontfoglalas.js'

const botStore = useIdopontfoglalasStore()

onMounted(() =>{
  idopontfoglalasStore.loadAll()
})

</script>

<template>
      <div class="container">
        <nav class="text-center">
          <RouterLink class="btn btn-outline-success m-2" to="/">Lehetőségek</RouterLink>
          <RouterLink class="btn btn-outline-success m-2" to="/new">Időpontfoglalás</RouterLink>
        </nav>
          <RouterView />
      </div>
</template>
