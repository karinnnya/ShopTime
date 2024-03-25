<script setup>
import { RouterLink, RouterView } from 'vue-router'


</script>

<template>
  <header>

    <div class="bg-black text-zinc-400 ">
      <!-- <HelloWorld msg="You did it!" /> -->
      <nav class="container m-auto ">
        <div class="flex justify-between items-center p-5">

          <h1 class="text-white">Shoptime</h1>
          <div class="w-full uppercase ">

            <RouterLink class="ml-20" to="/">Home</RouterLink>
            <RouterLink class="ml-10" to="/orders">orders</RouterLink>
            <RouterLink class="ml-10" to="/product">product</RouterLink>

          </div>
          <p class="text-white">Admin</p>
        </div>
      </nav>
    </div>
  </header>

  <div class="container  m-auto py-10 ">
    <RouterView />

  </div>
</template>
