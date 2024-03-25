<script setup>
import TotalComp from '@/components/TotalComp.vue'
import ActivityComp from '@/components/ActivityComp.vue'
import TransactionWeb from '@/components/TransactionWeb.vue'
import LatestOrders from '@/components/LatestOrders.vue'




</script>

<template>
  <main>
    <div class="flex justify-between items-end mb-4">
      <h2 class="title ">OVERVIEW</h2>
      <div class="flex justify-between items-center ">
        <p class="mr-1">2018</p>
        <font-awesome-icon class="mr-1" icon="caret-right" />
        <p class="mr-4">2019</p>
        <p class="mr-1">Weekly</p>
        <font-awesome-icon icon="caret-down" />
      </div>
    </div>
    <TotalComp class="mb-5" />
    <div class="bg-white p-5 mb-5">
      <h2 class="title ">Activity</h2>
      <ActivityComp />
    </div>
    <div class="flex">
      <TransactionWeb class="w-1/2 mr-5" />
      <LatestOrders class="w-1/2" />

    </div>
  </main>
</template>
