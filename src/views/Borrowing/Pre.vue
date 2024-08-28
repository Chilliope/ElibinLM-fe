<template>
    <div class="bg-white w-full h-max rounded-2xl shadow-sm pb-10">
        <div class="border-b border-slate-300 px-3 py-2 text-xl">
            Pre-Peminjaman
        </div>
        <div class="w-full px-3 py-2 flex flex-col lg:flex-row gap-3">
            <div class="w-full lg:w-1/2">
                <label for="">Nama peminjam</label>
                <input type="text" placeholder="Nama Peminjam" class="border border-slate-400 outline-none px-3 py-2 w-full rounded-lg">
            </div>
            <div class="w-full lg:w-1/2">
                <label for="">Kelas</label>
                <select class="border border-slate-400 outline-none px-3 py-2 w-full rounded-lg">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
            </div>
        </div>
        <div class="mt-3 px-3 py-2 grid grid-cols-1 gap-3 lg:grid-cols-2">
            <div class="bg-white w-full h-max shadow-customBoxShadow rounded-lg flex flex-row p-3 gap-3" v-for="item in 3" :key="item">
                <div class="w-1/2 h-max">
                    <img :src="'bukujs.jpg'" alt="buku" class="w-24 h-24 object-cover lg:w-32 lg:h-32">
                </div>
                <div class="lg:w-full">
                    <h6 class="capitalize">lancar java & javascript</h6>
                    <small class="text-xs text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit...</small>
                    <div class="mt-2">
                        <input type="text" class="border border-slate-400 rounded-lg px-3 py-1 outline-none" placeholder="Jumlah Buku" value="1">
                    </div>
                    <div class="flex justify-end mt-3">
                        <button class="bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-400 hover:duration-150">Hapus</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="px-3 py-2 flex justify-end">
            <button class="bg-green-500 text-white px-3 py-2 rounded-lg hover:bg-green-400 hover:duration-150">Simpan</button>
        </div>
    </div>
</template>