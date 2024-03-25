<template>
    <div class="bg-white">
        <div class=" px-10 py-8">
            <h2 class="title mb-8">

                Latest Orders

            </h2>

            <div class="py-2 border-b-2 flex justify-between items-end" v-for="i in LaetOrderData"
                :key="'lastOrder' + i.id">
                <div class="flex ">
                    <div class="size-28 mr-4">
                        <img :src="i.img" alt="">
                    </div>
                    <div class="flex flex-col justify-around pt-3">
                        <h4 class="font-bold">{{ i.product }}</h4>
                        <p class=" text-gray-400"><font-awesome-icon icon="clock" class="text-sm mr-1" />{{ i.time }}
                        </p>
                        <p class=" text-gray-400"><font-awesome-icon icon="person" class="text-lg mr-1" />{{ i.userName
                            }}
                        </p>
                    </div>

                </div>
                <div>
                    <p class="text-right">
                        Total<br><span class="text-lg font-bold ">
                            {{ i.total }}
                        </span>
                    </p>
                </div>
            </div>





        </div>
    </div>
</template>

<script>
export default {

    setup() {

        let LaetOrderData = [
            { 'id': '1', 'product': 'Vintage T-shirt', 'userName': 'Belle Willis', 'time': '2018/6/13 13:42', 'total': ' 3,200', 'img': 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
            { 'id': '2', 'product': 'Cowboy Jacket', 'userName': 'Lura Holland', 'time': '2018/6/13  10:45', 'total': ' 2,800', 'img': 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
            { 'id': '3', 'product': 'Coach Coat', 'userName': 'Adrian Cummings', 'time': '2018/6/13  8:26', 'total': ' 1,600', 'img': 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        ]



        return {
            LaetOrderData

        }
    },

}

</script>