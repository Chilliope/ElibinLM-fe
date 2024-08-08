<template>
    <div class="flex flex-col lg:justify-between lg:flex-row-reverse">
        <div class="flex">
            <router-link to="/dashboard" class="capitalize text-blue-500">dashboard</router-link>/
            <router-link to="/koleksi-buku" class="capitalize text-blue-500">koleksi buku</router-link>/
        </div>
        <div>
            <h1 class="text-2xl font-medium lg:text-3xl">Koleksi Buku</h1>
            <p class="capitalize lg:text-lg">selamat datang di koleksi buku</p>
        </div>
    </div>
    <div class="flex flex-col items-center">
        <div class="bg-blue-500 w-full h-44 rounded-3xl mt-8 shadow-sm flex flex-col gap-3 px-8 py-4 text-white -z-20">
            <div class="flex flex-col gap-3">
                <h6 class="capitalize lg:text-lg">total koleksi buku</h6>
                <div class="text-6xl">
                    536
                </div>
            </div>
        </div>
        <div ref="bookNav" class="bg-white w-4/5 h-20 rounded-3xl shadow-sm relative -top-10 flex flex-row items-center justify-center z-0">
            <router-link to="/tambah-koleksi" class="flex flex-col items-center lg:flex-row lg:gap-3 lg:bg-white lg:px-3 lg:py-2 lg:rounded-xl lg:shadow-customBoxShadow">
                <div class="bg-green-200 text-green-600 grid place-content-center text-2xl w-10 h-10 rounded-full"><i class="fa-solid fa-plus"></i></div>
                <small class="text-slate-600">Tambah Koleksi</small>
            </router-link>
        </div>
        <div class="bg-white w-full h-12 rounded-xl overflow-hidden shadow-sm">
            <form class="flex items-center">
                <input type="text" placeholder="cari koleksi buku..." class="w-full h-12 px-6 text-lg outline-none capitalize">
                <button class="w-max bg-blue-500 text-white px-4 h-8 rounded-xl mr-4">Cari</button>
            </form>
        </div>
        <div class="w-full grid grid-cols-1 gap-3 lg:grid-cols-2 mt-3">
            <div v-for="item in 10" :key="item" class="bg-white w-full h-mx px-6 py-3 flex gap-3 rounded-3xl shadow-sm">
                <div>
                    <img :src="'bukujs.jpg'" alt="jpg" class="w-60 h-60 object-cover rounded-3xl lg:h-60">
                </div>
                <div class="flex flex-col gap-2 w-full">
                    <div class="flex flex-col gap-2">
                        <div class="border-b border-slate-800 w-full h-max">
                            <h5 class="font-medium">Lancar Java & Javascript</h5>
                        </div>
                        <div>
                            <div class="capitalize">penulis: <span>Mr.Lorem</span></div>
                            <div class="capitalize">stok buku: <span>32</span></div>
                        </div>
                        <div>
                            <p class="text-xs text-slate-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi corporis iste ducimus nisi unde deserunt?.</p>
                        </div>
                    </div>
                    <div class="flex flex-row gap-3 h-full justify-end items-end">
                        <router-link to="/edit-koleksi/title-title" class="bg-blue-200 text-blue-600 px-3 py-2 rounded-lg hover:bg-blue-100 hover:text-blue-500 hover:duration-150"><i class="fa-regular fa-pen-to-square"></i></router-link>
                        <form>
                            <button class="bg-red-200 text-red-600 px-3 py-2 rounded-lg hover:bg-red-100 hover:text-red-500 hover:duration-150"><i class="fa-solid fa-trash"></i></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>