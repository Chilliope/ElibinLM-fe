<template>
    <div class="bg-white w-full h-screen grid grid-cols-2">
      <div
        class="border border-black w-full h-max py-2"
        v-for="subBook in subBooks"
        :key="subBook.ISBN"
      >
        <div
          class="w-full text-center font-bold border-b border-black flex flex-col justify-center items-center"
        >
          <h5>Perpustakaan</h5>
          <h6 class="">{{ library.library }}</h6>
        </div>
        <div class="w-full flex flex-col justify-center items-center">
          <span>{{ subBook.book_id }}.{{ subBook.book.rack_id }}</span>
          <span>{{ getFirstThreeLetters(subBook.book.writer) }}</span>
          <span>{{ getFirstLetters(subBook.book.title) }}</span>
          <span>c.{{ subBook.copy }}</span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { onMounted, nextTick } from "vue";
  import { useRoute } from "vue-router";
  import useLibrary from "../../service/data/library";
  
  const  { library, getLibrary } = useLibrary()
  
  export default {
    setup() {
      const route = useRoute();
      const subBooks = JSON.parse(route.query.subBooks || "[]"); // Capture selected subBooks from the query
  
      const getFirstThreeLetters = (text) => {
        return text.substring(0, 3);
      };
  
      const getFirstLetters = (text) => {
        return text.substring(0, 1);
      };
  
      onMounted(async () => {
        // Fetch library data
        await getLibrary();
  
        // Ensure DOM is rendered
        await nextTick();
  
        // Call window.print() after everything is rendered
        window.print();
      });
  
      return {
        subBooks,
        getFirstThreeLetters,
        getFirstLetters,
        library
      };
    },
  };
  </script>
  