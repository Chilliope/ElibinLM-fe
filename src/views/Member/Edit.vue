<template>
    <div class="flex flex-col lg:justify-between lg:flex-row-reverse">
      <div class="flex">
        <router-link to="/dashboard" class="capitalize text-blue-500"
          >dashboard</router-link
        >/
        <router-link to="/anggota" class="capitalize text-blue-500"
          >anggota</router-link
        >/
        <router-link to="/edit-anggota" class="capitalize text-blue-500"
          >edit anggota</router-link
        >/
      </div>
      <div>
        <h1 class="text-2xl font-medium lg:text-3xl">Tambah Anggota</h1>
        <p class="capitalize lg:text-lg">selamat datang di tambah anggota</p>
      </div>
    </div>
    <div class="bg-white w-full h-max my-8 rounded-3xl px-4 py-3 shadow-sm">
      <form class="capitalize flex flex-col gap-3 w-full lg:flex-row">
          <div class="flex flex-col gap-3 lg:w-1/2">
              <div class="flex flex-col">
                  <label for="nis" class="font-medium text-slate-500">NIS</label>
                  <input type="number" class="text-black rounded-lg px-3 py-2 capitalize outline-none border border-slate-400" placeholder="judul">
              </div>
              <div class="flex flex-col">
                  <label for="nama" class="font-medium text-slate-500">nama</label>
                  <input type="text" class="text-black rounded-lg px-3 py-2 capitalize outline-none border border-slate-400" placeholder="penulis">
              </div>
              <div class="flex flex-col">
                  <label for="tempat_lahir" class="font-medium text-slate-500">tempat lahir</label>
                  <input type="text" class="text-black rounded-lg px-3 py-2 capitalize outline-none border border-slate-400" placeholder="penerbit">
              </div>
              <div class="flex flex-col">
                  <label for="tanggal_lahir" class="font-medium text-slate-500">tanggal lahir</label>
                  <input type="date" class="text-black rounded-lg px-3 py-2 capitalize outline-none border border-slate-400" placeholder="ISBN">
              </div>
          </div>
          <div class="flex flex-col gap-3 lg:w-1/2">
              <div class="flex flex-col">
                  <label for="nomor_telepon" class="font-medium text-slate-500">nomor telepon</label>
                  <input type="number" class="text-black rounded-lg px-3 py-2 capitalize outline-none border border-slate-400" placeholder="jumlah halaman">
              </div>
              <div class="flex flex-col">
                  <label for="alamat" class="font-medium text-slate-500">alamat</label>
                  <textarea type="text" class="text-black rounded-lg px-3 py-2 capitalize outline-none border border-slate-400" placeholder="alamat"></textarea>
                </div>
              <div class="flex flex-col w-full">
                  <label for="foto_anggota" class="font-medium text-slate-500">foto anggota</label>
                  <div class="bg-white rounded-lg w-full flex">
                      <input type="file" class="text-black rounded-lg px-3 py-2 capitalize outline-none border border-slate-400 w-full">
                  </div>
              </div>
              <div class="flex flex-col">
                  <label for="kelas" class="font-medium text-slate-500">kelas</label>
                  <select class="text-black rounded-lg px-3 py-2 capitalize outline-none border border-slate-400" placeholder="nomor punggung buku">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                  </select>
              </div>
              <div class="flex flex-row justify-between pb-8 capitalize">
                  <router-link to="/anggota" class="w-max h-max px-6 py-3 rounded-xl bg-red-500 text-white hover:bg-red-400 hover:duration-150">batal</router-link>
                  <button class="w-max h-max bg-green-500 text-white hover:bg-green-400 hover:duration-150 rounded-xl px-6 py-3">Simpan</button>
              </div>
          </div>
      </form>
    </div>
  </template>
  