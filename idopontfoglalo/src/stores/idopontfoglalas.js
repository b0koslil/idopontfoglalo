import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
//import { useToast } from 'vue-toastification'

export const useIdopontfoglalasStore = defineStore('idopontfoglalas', () => {
  const lehetosegek = ref([])
  const valaszt = ref({}) 
  const toast = useToast()
  const total = ref(0)

  const loadAll = () => {
    fetch("http://localhost:3000/idopontfoglalas")
      .then(resp => resp.json())
      .then(data => products.value = data)
  }

  const kivalaszt = (id) => {
    if (lehetosegek.value.find((p) => p.id == id).store === 0) {
      toast.error("Nincs időpont")
      return
    }
    valaszt.value[id] = valaszt.value[id] ? valaszt.value[id] + 1 : 1
    toast("Kiválasztva")
    lehetosegek.value.find((p) => p.id == id).store--
  }
  
  const emptyLehetoseg = () => {
    for (const key in valaszt.value) {
      lehetosegek.value.find((p) => p.id == key).store += lehetosegek.value[key]
    }
    lehetosegek.value = {}
    toast.error("Törölve minden")
  }

  const deleteLehetoseg = (id) => {
    console.log(valaszt.value)
    products.value.find((p) => p.id == id).store += valaszt.value[id]
    delete valaszt.value[id]

    toast.success("Törölve")
  }

  return { lehetosegek, valaszt, loadAll, kivalaszt, emptyLehetoseg, deleteLehetoseg}
})
