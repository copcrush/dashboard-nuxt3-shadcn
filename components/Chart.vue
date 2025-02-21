<script setup>
import { ref, computed, onMounted } from "vue";

let props = defineProps(["currentCategory", "data"]);
let data = ref(props.data || []);
let currentCategory = ref(props.currentCategory || "today");

let categories = ref({
  today: Array.from(
    { length: 24 },
    (_, i) => `${String(i).padStart(2, "0")}:00`
  ),
  week: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  year: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  month: [],
});

function generateMonth() {
  let currentDate = new Date();
  let currentMonth = currentDate.getMonth() + 1;
  let currentYear = currentDate.getFullYear();
  let daysInMonth = new Date(currentYear, currentMonth, 0).getDate();

  let monthDates = Array.from({ length: daysInMonth }, (_, i) => {
    let dayString = String(i + 1).padStart(2, "0");
    let monthString = String(currentMonth).padStart(2, "0");
    return `${monthString}/${dayString}`;
  });

  categories.value.month = monthDates;
}

onMounted(() => {
  generateMonth();
});

const options = computed(() => ({
  chart: {
    type: "spline",
    animation: {
      enabled: false,
    },
  },
  title: {
    text: "",
  },
  xAxis: {
    gridLineColor: "transparent",
    categories: categories.value[currentCategory.value],
  },
  yAxis: {
    gridLineColor: "transparent",
    title: {
      text: "",
    },
  },
  legend: {
    enabled: false,
  },
  plotOptions: {
    line: {
      marker: {
        enabled: false,
      },
      dataLabels: {
        enabled: false,
      },
      enableMouseTracking: false,
    },
  },
  series: [
    {
      name: "line",
      lineWidth: "4px",
      color: "rgba(29,217,93,1)",
      data: data.value,
    },
  ],
}));
</script>

<template>
  <div class="border rounded-lg p-4">
    <highchart :options="options" />
  </div>
</template>
