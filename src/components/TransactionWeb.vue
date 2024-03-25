<template>
  <div class="bg-white">
    <div class=" px-10 py-8">
      <h2 class="title">

        Transaction Website

      </h2>


      <div class="last:border-0 pb-6 border-b-2 flex justify-between items-center my-8" v-for="i in   TransactionData  "
        :key="'TransactionDatai' + i.id">
        <div class="flex items-center">
          <img class="size-12 mr-4" :src="i.logo" alt="">

          <p class="text-gray-400 font-bold">{{ i.url }}</p>

        </div>
        <div class="flex items-center">

          <p class="text-lg">
            {{ i.number1 }}
          </p>
          <div class="ml-5 " :class="i.icon === 'up-long' ? 'text-myColorGreen' : 'text-myColorRed'">
            <font-awesome-icon :icon="i.icon" />
            {{ i.number2 }}%
          </div>
        </div>
      </div>

    </div>

  </div>


</template>

<script>


import fbLogo from '../components/icon/facebook.svg'
import googleLogo from '../components/icon/google.svg'
import shopifyLogo from '../components/icon/shopify.svg'
import wordpressLogo from '../components/icon/wordpress.svg'


export default {

  setup() {

    let TransactionData = [
      { 'id': '1', 'logo': fbLogo, 'url': 'Facebook.com', 'number1': '45,836', 'number2': '20', 'icon': 'up-long' },
      { 'id': '2', 'logo': googleLogo, 'url': 'google.com', 'number1': '45,836', 'number2': '12', 'icon': 'up-long' },
      { 'id': '3', 'logo': shopifyLogo, 'url': 'Shopify.com', 'number1': '45,836', 'number2': '15', 'icon': 'down-long' },
      { 'id': '4', 'logo': wordpressLogo, 'url': 'Wordpress.com', 'number1': '45,836', 'number2': '30', 'icon': 'down-long' },]



    return {
      TransactionData

    }
  },

}


</script>