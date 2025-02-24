<script setup lang="ts">
const loading = ref(false);
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
    <main class="">
      <div>
        <Area />
      </div>
    </main>
  </div>
</template>
