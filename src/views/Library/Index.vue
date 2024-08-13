<template>
    <div class="flex flex-col lg:justify-between lg:flex-row-reverse">
      <div class="flex">
        <router-link to="/dashboard" class="capitalize text-blue-500"
          >dashboard</router-link
        >/
        <router-link to="/perpustakaan" class="capitalize text-blue-500"
          >perpustakaan</router-link
        >
      </div>
      <div>
        <h1 class="text-2xl font-medium lg:text-3xl">Perpustakaan</h1>
        <p class="capitalize lg:text-lg">selamat datang di perpustakaan</p>
      </div>
    </div>
    <div class="bg-white w-full h-max my-8 rounded-3xl px-4 py-3 shadow-sm">
      <form class="capitalize flex flex-col gap-3 w-full lg:flex-row">
          <div class="flex flex-col gap-3 w-full">
              <div class="flex flex-col">
                  <label for="nama" class="font-medium text-slate-500">nama perpustakaan</label>
                  <input type="text" class="text-black rounded-lg px-3 py-2 capitalize outline-none border border-slate-400" placeholder="nama perpustakaan">
              </div>
              <div class="flex flex-col w-full">
                  <label for="foto_perpustakaan" class="font-medium text-slate-500">foto perpustakaan</label>
                  <div class="bg-white rounded-lg w-full flex">
                      <input type="file" class="text-black rounded-lg px-3 py-2 capitalize outline-none border border-slate-400 w-full">
                  </div>
              </div>
              <div class="flex flex-row justify-between pb-8 capitalize">
                  <button class="w-max h-max bg-green-500 text-white hover:bg-green-400 hover:duration-150 rounded-xl px-6 py-3">Simpan</button>
              </div>
          </div>
      </form>
    </div>
  </template>
  