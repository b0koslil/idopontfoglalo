<template>
    <h1 class="text-center">Kiválasztva</h1>
      <p v-if="Object.entries(idopontfoglalasStore.cart).length < 1"> Nincs semmi választva</p>
      <div v-else>
        <table class="table table-striped w-75 mx-auto">
          <thead>
            <tr>
              <th>Lehetőség</th>
              <th>Időpont</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(v, k) in idopontfoglalasStore.valaszt">
              <td>{{ idopontfoglalasStore.lehetosegek.find(p => p.id === k).name }}</td>
              <td>{{ idopontfoglalasStore.lehetosegek.find(p => p.id === k).time }}</td>
              <td><span @click="idopontfoglalasStore.deleteLehetoseg(k)" class="btn btn-danger">&#x1F5D1;</span></td>
            </tr>
          </tbody>
        </table>
        <button @click="idopontfoglalasStore.emptyLehetoseg()"class="btn btn-outline-danger">Minden törlése</button>
      </div>
  </template>
  
  <script setup>
    import {useIdopontfoglalasStore} from '@/stores/idopontfoglalas.js'
    const botStore = useIdopontfoglalasStore()
  
  </script>