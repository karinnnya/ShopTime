<template>
    <div>
        <ul class="flex items-center -space-x-px h-8 text-sm justify-center my-8" v-show="pageNumber.length !== 0">
            <li>
                <button @click="changePage(nowPage - 1)" :class="{ 'invisible ': nowPage === 1 }" class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 
         hover:bg-gray-100 hover:text-gray-700 ">
                    <font-awesome-icon icon="angle-left" />
                </button>
            </li>
            <li class="bg-white" v-for="i in pageNumber" :key="i + 'pageNumber'">
                <button @click="changePage(i)" :class="{ 'pointer-events-none bg-gray-500 text-white': nowPage === i }"
                    class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500  border border-gray-300 hover:bg-gray-100 
        hover:text-gray-700 ">
                    {{ i }}</button>
            </li>

            <li>
                <button @click="changePage(nowPage + 1)" :class="{ 'invisible': nowPage === pageNumber }" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 
         hover:bg-gray-100 hover:text-gray-700 ">
                    <font-awesome-icon icon="angle-right" />
                </button>
            </li>
        </ul>


    </div>
</template>


<script>
// import { onMounted, ref, } from 'vue'
export default {
    setup() {


    },
    props: {
        pageNumber: Number,
        nowPage: Number,
        changePage: Function,
    },
};
</script>
