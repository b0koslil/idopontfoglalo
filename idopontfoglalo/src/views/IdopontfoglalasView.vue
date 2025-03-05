<script setup>
import {useIdopontfoglalasStore} from '@/stores/idopontfoglalas.js'

const idopontfoglalasStore = useIdopontfoglalasStore()
</script>

<template>
  <h1 class="text-center">Lehetőségek</h1>
  <div class="row">
    <div v-for="p in idopontfoglalasStore.lehetosegek" :key="p.id" class="card col-12 col-md-4 col-lg-3">
      <p class="card-title text-center"> {{p.name}}</p>
      <div class="card-footer text-center">
        <button :disabled="p.store == 0" @click="idopontfoglalasStore.valaszt(p.id)" class="btn btn-outline-primary w-50">&#128722;</button>
      </div>
    </div>
  </div>
</template>
