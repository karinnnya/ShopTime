<template>
  <div class="relative">
    <div v-for="i in pageData" :Key="i.id + 'cart'">
    </div>

    <div class="relative overflow-x-auto ">
      <table class="w-full  text-left rtl:text-right">
        <thead class="text-lg bg-white font-bold">
          <tr>

            <th scope="col" class="pl-10 py-3">
              Customer
            </th>
            <th scope="col" class="px-6 py-3">
              Product List
            </th>
            <th scope="col" class="px-6 py-3">
              Total
            </th>
            <th scope="col" class="px-6 py-3">
              Add to Cart
            </th>
            <th scope="col" class="px-6 py-3">
              Check-out
            </th>
            <th scope="col" class="px-6 py-3">
              Address
            </th>
            <th scope="col" class="px-6 py-3">
              Status
            </th>
          </tr>
        </thead>
        <tbody>


          <tr class=" even:bg-gray-200" v-for="i in pageData" :Key="i.id + 'cart'">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 align-top">
              <div class="flex">
                <input type="checkbox" id="scales" name="scales" />
                <label for="scales"> {{ i.user?.firstName }}
                </label>
              </div>

            </th>
            <td class="px-6 py-4 ">
              <ul>
                <li class="border-b-2 border-white pb-2 last:border-0 last:p-0" v-for=" p in  i.products"
                  :key="p.id + i.user?.id + 'product'">
                  <div>
                    <p>{{ p.title }}</p>
                    <div class="flex justify-between">
                      <p class="text-gray-500">${{ p.price }}</p>
                      <p>{{ p.quantity }}</p>
                    </div>
                  </div>
                </li>
              </ul>
            </td>
            <td class="px-6 py-4 align-top">
              $2,200
            </td>
            <td class="px-6 py-4 align-top ">
              2018/6/8<br>
              13:39
            </td>
            <td class="px-6 py-4 align-top">
              2018/6/8<br>
              20:23
            </td>
            <td class="px-6 py-4 align-top">
              {{ i.user?.address.address }} {{ i.user?.address.city }}
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
import { ref, onMounted } from 'vue'

import { useGetApiDataStore } from '@/stores/all.js'
import { storeToRefs } from 'pinia'

const cartsUrl = 'https://dummyjson.com/carts'
const userUrl = `https://dummyjson.com/users/`

import PagesComp from '@/components/PagesComp.vue'


const getApiStore = useGetApiDataStore()
const { getData } = getApiStore
const { res } = storeToRefs(getApiStore)




export default {


  setup() {
    const carts = ref([])
    const users = ref([])

    const pageNumber = ref(0)
    const nowPage = ref(1);
    const pageData = ref([]);

    async function getApi() {
      await getData(cartsUrl)

      carts.value = res.value.carts
      pageNumber.value = Math.ceil(carts.value.length / 5)
      getUser()
      changePageData(carts.value)

    }

    async function getUser() {
      await getData(userUrl)
      users.value = res.value.users

      //避免重複資料
      await Promise.all(carts.value.map(async cart => {
        const userId = cart.userId
        const user = users.value.find(user => user.id === userId)

        if (user) {
          //將資料存進去
          cart.user = user
        } else {
          //如果上面找不到資料的話
          const otherUserUrl = `https://dummyjson.com/users/${userId}`
          await getData(otherUserUrl)
          const otherUserData = res.value
          cart.user = otherUserData
        }
      }));

    }


    function changePage(i) {
      nowPage.value = i
      changePageData(carts.value)
      //回到網頁上方
      window.scrollTo(0, 0)
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
