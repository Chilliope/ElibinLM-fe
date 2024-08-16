<template>
    <div class="flex flex-col lg:justify-between lg:flex-row-reverse">
        <div class="flex">
            <router-link to="/dashboard" class="capitalize text-blue-500">dashboard</router-link>/
            <router-link to="/peminjaman" class="capitalize text-blue-500">peminjaman</router-link>/
        </div>
        <div>
            <h1 class="capitalize text-2xl font-medium lg:text-3xl">peminjaman koleksi</h1>
            <p class="capitalize lg:text-lg">selamat datang di peminjaman koleksi</p>
        </div>
    </div>
    <div class="flex flex-col items-center">
        <div class="bg-blue-500 w-full h-44 rounded-3xl mt-8 shadow-sm flex flex-col gap-3 px-8 py-4 text-white -z-20">
            <div class="flex flex-col gap-3">
                <h6 class="capitalize lg:text-lg">total peminjaman</h6>
                <div class="text-6xl">
                    536
                </div>
            </div>
        </div>
        <div ref="bookNav" class="bg-white w-4/5 h-20 rounded-3xl shadow-sm relative -top-10 flex flex-row items-center justify-evenly lg:justify-center lg:gap-3 z-0">
            <router-link to="/tambah-pengunjung" class="flex flex-col items-center lg:flex-row lg:gap-3 lg:bg-white lg:px-3 lg:py-2 lg:rounded-xl lg:shadow-customBoxShadow">
                <div class="bg-green-200 text-green-600 grid place-content-center text-2xl w-10 h-10 rounded-full"><i class="fa-solid fa-address-book"></i></div>
                <small class="text-slate-600">Peminjaman</small>
            </router-link>
            <span class="w-6 h-6 bg-red-500 rounded-full relative right-8 top-6 text-white text-xs place-content-center font-medium border-2 border-white hidden lg:grid">32</span>
            <span class="w-6 h-6 bg-red-500 rounded-full relative right-16 text-white text-xs place-content-center font-medium border-2 border-white grid lg:hidden">32</span>
            <router-link to="/statistik-peminjaman" class="flex flex-col items-center lg:flex-row lg:gap-3 lg:bg-white lg:px-3 lg:py-2 lg:rounded-xl lg:shadow-customBoxShadow">
                <div class="bg-yellow-200 text-yellow-600 grid place-content-center text-2xl w-10 h-10 rounded-full"><i class="fa-solid fa-chart-simple"></i></div>
                <small class="text-slate-600 text-xs">Statistik</small>
            </router-link>
        </div>
        <div class="bg-white w-full h-12 rounded-xl overflow-hidden shadow-sm my-6">
            <form class="flex items-center">
                <input type="text" placeholder="cari data peminjaman..." class="w-full h-12 px-6 text-lg outline-none capitalize">
                <button class="w-max bg-blue-500 text-white px-4 h-8 rounded-xl mr-4">Cari</button>
            </form>
        </div>
        <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div v-for="item in 10" :key="item">
                <form class="bg-white w-max h-max px-3 py-2 rounded-t-xl">
                    <button class="text-red-500 text-xl hover:text-red-400 hover:duration-150"><i class="fa-solid fa-trash"></i></button>
                </form>
                <div class="bg-white px-6 py-2 shadow-sm rounded-b-xl rounded-r-xl">
                    <div class="bg-blue-500 w-full h-max rounded-xl text-white px-4 pt-2 pb-4">
                        <div class="flex flex-row justify-between">
                            <div>
                                <div class="uppercase text-xl font-bold">
                                    No {{ item }}
                                </div>
                                <div class="uppercase">
                                    <h6>erlang andriyanputra(10249)</h6>
                                    <h5>xii pplg b</h5>
                                </div>
                                <ul class="list-disc px-8">
                                    <li>buku 1</li>
                                    <li>buku 2</li>
                                    <li>buku 3</li>
                                </ul>
                            </div>
                            <div>
                                <span>Senin, 09/09/2024</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>                
        </div>
    </div>
</template>