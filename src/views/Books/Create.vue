<template>
  <div class="flex flex-col lg:justify-between lg:flex-row-reverse">
    <div class="flex">
      <router-link to="/dashboard" class="capitalize text-blue-500"
        >dashboard</router-link
      >/
      <router-link to="/koleksi-buku" class="capitalize text-blue-500"
        >koleksi buku</router-link
      >/
      <router-link to="/tambah-koleksi" class="capitalize text-blue-500"
        >tambah koleksi</router-link
      >/
    </div>
    <div>
      <h1 class="text-2xl font-medium lg:text-3xl">Tambah Koleksi</h1>
      <p class="capitalize lg:text-lg">selamat datang di tambah koleksi</p>
    </div>
  </div>
  <div class="bg-white w-full h-max my-8 rounded-3xl px-4 py-3 shadow-sm">
    <form class="capitalize flex flex-col gap-3 w-full lg:flex-row">
        <div class="flex flex-col gap-3 lg:w-1/2">
            <div class="flex flex-col">
                <label for="judul" class="font-medium text-slate-500">judul</label>
                <input type="text" class="text-black rounded-lg px-3 py-2 capitalize outline-none border border-slate-400" placeholder="judul">
            </div>
            <div class="flex flex-col">
                <label for="penulis" class="font-medium text-slate-500">penulis</label>
                <input type="text" class="text-black rounded-lg px-3 py-2 capitalize outline-none border border-slate-400" placeholder="penulis">
            </div>
            <div class="flex flex-col">
                <label for="penerbit" class="font-medium text-slate-500">penerbit</label>
                <input type="text" class="text-black rounded-lg px-3 py-2 capitalize outline-none border border-slate-400" placeholder="penerbit">
            </div>
            <div class="flex flex-col">
                <label for="ISBN" class="font-medium text-slate-500">ISBN</label>
                <input type="text" class="text-black rounded-lg px-3 py-2 capitalize outline-none border border-slate-400" placeholder="ISBN">
            </div>
            <div class="flex flex-col">
                <label for="tahun_terbit" class="font-medium text-slate-500">tahun terbit</label>
                <input type="text" class="text-black rounded-lg px-3 py-2 capitalize outline-none border border-slate-400" placeholder="tahun terbit">
            </div>
            <div class="flex flex-col">
                <label for="nomor_punggung_buku" class="font-medium text-slate-500">nomor punggung buku</label>
                <input type="text" class="text-black rounded-lg px-3 py-2 capitalize outline-none border border-slate-400" placeholder="nomor punggung buku">
            </div>
        </div>
        <div class="flex flex-col gap-3 lg:w-1/2">
            <div class="flex flex-col">
                <label for="jumlah_halaman" class="font-medium text-slate-500">jumlah halaman</label>
                <input type="text" class="text-black rounded-lg px-3 py-2 capitalize outline-none border border-slate-400" placeholder="jumlah halaman">
            </div>
            <div class="flex flex-col">
                <label for="keterangan" class="font-medium text-slate-500">keterangan</label>
                <input type="text" class="text-black rounded-lg px-3 py-2 capitalize outline-none border border-slate-400" placeholder="keterangan">
            </div>
            <div class="flex flex-col w-full">
                <label for="foto_buku" class="font-medium text-slate-500">foto buku</label>
                <div class="bg-white rounded-lg w-full flex">
                    <input type="file" class="text-black rounded-lg px-3 py-2 capitalize outline-none border border-slate-400 w-full">
                </div>
            </div>
            <div class="flex flex-col">
                <label for="stok" class="font-medium text-slate-500">stok</label>
                <input type="text" class="text-black rounded-lg px-3 py-2 capitalize outline-none border border-slate-400" placeholder="stok">
            </div>
            <div class="flex flex-col">
                <label for="rak" class="font-medium text-slate-500">rak</label>
                <select class="text-black rounded-lg px-3 py-2 capitalize outline-none border border-slate-400" placeholder="nomor punggung buku">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
            </div>
            <div class="flex flex-row justify-between pb-8 capitalize">
                <router-link to="/koleksi-buku" class="w-max h-max px-6 py-3 rounded-xl bg-red-500 text-white hover:bg-red-400 hover:duration-150">batal</router-link>
                <button class="w-max h-max bg-green-500 text-white hover:bg-green-400 hover:duration-150 rounded-xl px-6 py-3">Simpan</button>
            </div>
        </div>
    </form>
  </div>
</template>
