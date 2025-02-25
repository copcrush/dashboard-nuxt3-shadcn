<script setup>
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
const loading = ref(false);
let data = ref([]);
const list = [
  {
    title: "Today",
  },
  {
    title: "Week",
  },
  {
    title: "Month",
  },
  {
    title: "Year",
  },
];
const cards = [
  {}, {}, {},
]

let currentCategory = ref("today");

function generateRandomValue(number) {
  let values = [];
  for (let j = 0; j < number + 1; j++) {
    values.push(Math.floor(Math.random() * 100));
  }
  data.value = values;
  return values;
}

const setCategory = (e) => {
  let v = e.target.innerText.toLowerCase();
  currentCategory.value = v;
  if (v === "today") generateRandomValue(24);
  if (v === "week") generateRandomValue(7);
  if (v === "month") generateRandomValue(31);
  if (v === "year") generateRandomValue(365);
};

onMounted(() => {
  generateRandomValue(24);
});
</script>

<template>
  <div class="grid w-full gap-4">
    <header class="flex items-start justify-between">
      <div class="grow">
        <p>Hi, welcome back !</p>
        <h1>Dashboard</h1>
      </div>
      <ProductNew />
    </header>
    <main class="grid w-full gap-4">
      <Tabs default-value="Today" class="w-full" @click="setCategory">
        <TabsList class="max-w-[400px]">
          <TabsTrigger v-for="(item, index) in list" :key="index" :value="item.title">
            {{ item.title }}
          </TabsTrigger>
        </TabsList>
        <TabsContent class="w-[100%]" v-for="(item, index) in list" :key="index" :value="item.title">
          <Area v-if="data.length > 0" :currentCategory="currentCategory" :data="data" />
        </TabsContent>
      </Tabs>
    </main>
    <!-- <footer class="w-full">
        <div>
      </div>
    </footer> -->
  </div>
</template>
