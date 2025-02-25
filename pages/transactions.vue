<script setup lang="ts">
import { ref, watchEffect } from "vue";

const { data, pending: loading, error, refresh } = useFetch("/api/finance");

watchEffect(() => {
  refresh();
});
</script>

<template>
  <div class="grid w-full gap-4">
    <header class="flex items-start justify-between">
      <div class="grow">
        <p>Hi, welcome back !</p>
        <h1>Transaction</h1>
      </div>
      <ProductNew />
    </header>
    <main>
      <div>
        <Transactions :currentCategory="'today'" :data="data" />
      </div>
    </main>
  </div>
</template>
