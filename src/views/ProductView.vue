<template>
  <div class=" relative">



    <div class="relative overflow-x-auto ">
      <table class="w-full  text-left rtl:text-right">
        <thead class="text-lg bg-white font-bold">
          <tr>
            <th scope="col" class="pl-12 py-3">
              Product
            </th>
            <th scope="col" class="px-6 py-3">
              Original
            </th>
            <th scope="col" class="px-6 py-3">
              Discount
            </th>
            <th scope="col" class="px-6 py-3">
              Size
            </th>
            <th scope="col " class="px-6 py-3">
              Color
            </th>
            <th scope="col" class="px-6 py-3">
              Inventory
            </th>
            <th scope="col" class="px-6 py-3">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class=" even:bg-gray-200" v-for="i in pageData" :key="i.id">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 align-top">
              <div class="flex ">
                <input type="checkbox" class="mr-3" />
                <div>
                  <img class="size-12 " :src="i.images[0]" alt="">
                </div>
                <p class="pl-3  ">
                  {{ i.title }}

                </p>
              </div>

            </th>
            <td class="px-6 py-4 align-top">
              {{ i.price }}
            </td>

            <td class="px-6 py-4 align-top">
              {{ i.price }}
            </td>
            <td class="px-6 py-4" colspan="3">
              <ul>
                <li class="border-b-2 border-white py-2 last:border-0 l">
                  <div class="flex justify-between">
                    <p>L</p>
                    <p class="pr-6">Gray<br>
                      Black</p>
                    <p>15<br>20 </p>
                  </div>
                </li>
                <li class="border-b-2 border-white py-2 last:border-0 l">
                  <div class="flex justify-between">
                    <p>M</p>
                    <p class="pr-6">Gray<br>
                      Black</p>
                    <p>15<br>20 </p>
                  </div>
                </li>
                <li class="border-b-2 border-white py-2 last:border-0 l">
                  <div class="flex justify-between">
                    <p>S</p>
                    <p class="pr-6">Gray<br>
                      Black</p>
                    <p>15<br>20 </p>
                  </div>
                </li>
              </ul>
            </td>

            <td class="px-6 py-4 align-bottom">
              <select class=" p-3 rounded-lg text-white bg-myColorGreen text-center">
                <option>PUBLISHED</option>
                <option>UNPUBLISHED</option>

              </select>

            </td>
          </tr>

        </tbody>
      </table>
    </div>
    <PagesComp class=" absolute right-0" :pageNumber="pageNumber" :nowPage="nowPage" :changePage="changePage" />



  </div>

</template>

<script>
import { onMounted, ref, } from 'vue'

import { useGetApiDataStore } from '@/stores/all.js'
import { storeToRefs } from 'pinia'

import PagesComp from '@/components/PagesComp.vue'
const url = 'https://dummyjson.com/products'
const getApiStore = useGetApiDataStore()
const { getData } = getApiStore
const { res } = storeToRefs(getApiStore)



export default {

  setup() {

    const pageNumber = ref(0)
    const nowPage = ref(1);
    const pageData = ref([]);

    async function getApi() {
      await getData(url)
      pageNumber.value = Math.ceil(res.value.products?.length / 5)
      changePageData(res.value.products)

    }
    function changePage(i) {
      nowPage.value = i
      window.scrollTo(0, 0)
      changePageData(res.value.products)
    }


    function changePageData(data) {
      const startIndex = (nowPage.value - 1) * 5;
      const endIndex = startIndex + 5;
      pageData.value = data.slice(startIndex, endIndex);
    }




    onMounted(() => {
      getApi()


    });


    return {
      pageNumber,
      nowPage,
      pageData,
      changePage,
      changePageData
    }
  },
  components: {
    PagesComp,
  },
}


</script>

<style></style>
