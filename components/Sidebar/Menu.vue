<script setup>
const items = ref([
  {
    title: "Overview",
    path: "/",
    icon: "mage:dashboard",
  },
  {
    title: "Transaction",
    path: "/transactions",
    icon: "icon-park-outline:transaction",
  },
  {
    title: "Account",
    path: "/account",
    icon: "mdi:account-circle-outline",
  },
  {
    title: "Contacts",
    path: "/contacts",
    icon: "hugeicons:contact-book",
  },
  {
    title: "Settings",
    path: "/settings",
    icon: "mage:dashboard",
  },
]);
</script>

<template>
  <div>
    <header
      class="flex items-center gap-2 p-4 hover:scale-[101%] transition cursor-pointer"
    >
      <Logo />
      <h1 class="font-bold text-sm">FNZ-Finance Dashboard</h1>
    </header>
    <div class="px-4 grow">
      <div class="grid gap-4">
        <NuxtLink
          :href="item.path"
          v-for="(item, index) in items"
          :key="index"
          class="flex items-center gap-2 px-2 py-1 transition rounded cursor-pointer hover:bg-green-200"
        >
          <Icon size="20" :name="item.icon" color="black" />
          <span>{{ item.title }}</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
