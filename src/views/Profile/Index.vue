<template>
    <div class="flex flex-col lg:justify-between lg:flex-row-reverse">
        <div class="flex">
            <router-link to="/dashboard" class="capitalize text-blue-500">dashboard</router-link>/
            <router-link to="/profil" class="capitalize text-blue-500">profil</router-link>/
        </div>
        <div>
            <h1 class="text-2xl font-medium lg:text-3xl">Profil</h1>
            <p class="capitalize lg:text-lg">selamat datang di profil</p>
        </div>
    </div>
    <div class="bg-white w-full h-max rounded-2xl shadow-sm my-4 pb-8 px-3">
        <form class="w-full flex flex-col">
            <div class="w-full flex flex-col lg:justify-between lg:flex-row">
                <div class="lg:w-1/2 px-3 py-4 flex flex-col gap-3">
                    <div class="flex flex-col gap-1">
                        <label for="username" class="text-slate-500">Username</label>
                        <input type="text" placeholder="Username" class="border border-slate-400 rounded-lg px-3 py-1 outline-none">
                        <small class="text-slate-400">Username akan digunakan untuk keperluan saat login, jadi kamu harus mengingat username nya.</small>
                    </div>
                    <div class="flex flex-col gap-1">
                        <label for="name" class="text-slate-500">Nama</label>
                        <input type="text" placeholder="Nama" class="border border-slate-400 rounded-lg px-3 py-1 outline-none">
                        <small class="text-slate-400">Nama untuk input ini akan ditampilkan di beberapa halaman seperti Dashboard atau komponen seperti navbar.</small>
                    </div>
                    <div class="flex flex-col gap-1">
                        <label for="password" class="text-slate-500">Password</label>
                        <input type="password" placeholder="Password" class="border border-slate-400 rounded-lg px-3 py-1 outline-none">
                        <small class="text-slate-400">Password akan digunakan untuk keperluan saat login, jadi kamu harus mengingat password nya.</small>
                    </div>
                </div>
                <div class="lg:w-1/2 flex justify-center items-center">
                    <div class="px-3 py-2 flex flex-col items-center gap-3">
                        <img :src="'dummy.avif'" alt="pic" class="w-32 h-32 rounded-full object-cover border border-slate-400">
                        <input type="file" class="border border-slate-400 px-3 py-2 rounded-lg">
                        <small class="text-slate-400">Gunakan file dengan extension png/jpg/jpeg untuk mengganti foto</small>
                    </div>
                </div>
            </div>
            <div class="flex justify-end">
                <button class="bg-blue-500 w-max h-max px-6 py-3 font-medium text-white rounded-xl hover:bg-blue-400 hover:duration-150">Simpan</button>
            </div>
        </form>
    </div>
</template>
