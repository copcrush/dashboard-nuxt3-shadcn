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
      <div class="h-20 flex flex-col justify-center items-start">
        <div class="ml-5 flex flex-col gap-2">
          <div class="flex justify-center items-center gap-4">
            <img src="https://github.com/shadcn.png" alt="logo" class="w-8 h-8 rounded-full" />
            <p class=" text-black">User: Bob</p>
          </div>
          <div class="flex justify-start items-center">
            <p class="text-red-500">Log out</p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
