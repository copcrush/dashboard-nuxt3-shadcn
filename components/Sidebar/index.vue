<script setup>
const open = ref(true);
</script>

<template>
  <div>
    <div class="z-50 flex items-center justify-between w-full h-full p-4 lg:hidden">
      <Logo />
      <p class="font-bold text-sm">FNZ-Finance Dashboard</p>
      <Icon class="z-50 cursor-pointer left-2 top-2" size="30" name="iconamoon:menu-burger-horizontal"
        @click="open = true" />
      <div v-if="open" class="absolute bg-white top-0 left-0 z-[999] w-full h-full">
        <Icon class="absolute z-50 cursor-pointer right-4 top-4" size="30" name="material-symbols:close-rounded"
          @click="open = false" />
        <SidebarMenu />
      </div>
    </div>
    <div class="hidden lg:flex w-[200px] h-screen flex-col justify-between border-r">
      <SidebarMenu />
      <div class="bg-[#17334F] h-20 flex flex-col justify-center items-center">
        <div class="flex justify-center items-center gap-4">
          <img src="@/assets/logo.png" alt="logo" class="w-8 h-8"/>
          <p class="text-[#6AE683]">Username</p>
        </div>
        <div class="flex justify-center items-center">
          <p class="text-red-400">Log out</p>
        </div>
      </div>
    </div>
  </div>
</template>
