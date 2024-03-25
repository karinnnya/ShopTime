import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

// const url = 'https://dummyjson.com/products'

export const useGetApiDataStore = defineStore('getApiData', () => {
  const res = ref([])
  async function getData(url) {
    try {
      const data = await axios.get(url)
      res.value = data.data
    } catch (error) {
      console.log(error)
    }
  }
  return {
    res,
    getData
  }
})
