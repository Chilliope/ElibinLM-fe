<template>
    <div class="flex flex-col lg:justify-between lg:flex-row-reverse">
      <div class="flex">
        <router-link to="/dashboard" class="capitalize text-blue-500"
          >dashboard</router-link
        >/
        <router-link to="/admin" class="capitalize text-blue-500"
          >admin</router-link
        >/
        <router-link to="/edit-admin" class="capitalize text-blue-500"
          >edit admin</router-link
        >/
      </div>
      <div>
        <h1 class="text-2xl font-medium lg:text-3xl">Edit Admin</h1>
        <p class="capitalize lg:text-lg">selamat datang di edit admin</p>
      </div>
    </div>
    <div class="bg-white w-full h-max my-8 rounded-3xl px-4 py-3 shadow-sm">
      <form class="capitalize flex flex-col gap-3 w-full lg:flex-row">
          <div class="flex flex-col gap-3 w-full">
              <div class="flex flex-col">
                  <label for="username" class="font-medium text-slate-500">username</label>
                  <input type="text" class="text-black rounded-lg px-3 py-2 capitalize outline-none border border-slate-400" placeholder="username">
              </div>
              <div class="flex flex-col">
                  <label for="fullname" class="font-medium text-slate-500">fullname</label>
                  <input type="text" class="text-black rounded-lg px-3 py-2 capitalize outline-none border border-slate-400" placeholder="fullname">
              </div>
              <div class="flex flex-col">
                  <label for="password" class="font-medium text-slate-500">password</label>
                  <input type="password" class="text-black rounded-lg px-3 py-2 capitalize outline-none border border-slate-400" placeholder="password">
              </div>
              <div class="flex flex-col w-full">
                <label for="foto_profil" class="font-medium text-slate-500">foto profil</label>
                <div class="bg-white rounded-lg w-full flex">
                    <input type="file" class="text-black rounded-lg px-3 py-2 capitalize outline-none border border-slate-400 w-full">
                </div>
            </div>
              <div class="flex flex-row justify-between pb-8 capitalize">
                  <router-link to="/admin" class="w-max h-max px-6 py-3 rounded-xl bg-red-500 text-white hover:bg-red-400 hover:duration-150">batal</router-link>
                  <button class="w-max h-max bg-green-500 text-white hover:bg-green-400 hover:duration-150 rounded-xl px-6 py-3">Simpan</button>
              </div>
          </div>
      </form>
    </div>
  </template>
  