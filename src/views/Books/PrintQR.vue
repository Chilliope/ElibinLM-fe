<template>
  <div class="bg-white w-full h-screen grid grid-cols-2">
    <div
      v-for="subBook in subBooks"
      :key="subBook.code"
      class="bg-white border border-black w-full h-44 px-10"
    >
      <svg :id="'barcode-' + subBook.code"></svg>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import JsBarcode from "jsbarcode";
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();
    const subBooks = JSON.parse(route.query.subBooks || "[]"); // Capture selected subBooks from the query

    onMounted(() => {
      subBooks.forEach((subBook) => {
        JsBarcode(`#barcode-${subBook.code}`, subBook.code, {
          format: "CODE39",
          width: 2,
          height: 40,
          displayValue: true,
          fontSize: 12,
        });
      });

      // Uncomment to print the page automatically after barcodes are generated.
      window.print();
    });

    return {
      subBooks,
    };
  },
};
</script>
