<script setup>
import { ref, computed, onMounted } from "vue";

let props = defineProps(["currentCategory", "data"]);
let rawData = ref(props.data || []);
let currentCategory = ref(props.currentCategory || "today");

let categories = ref({
  today: [],
  week: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  year: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  month: [],
});

function generateDummyData() {
  let dummy = [];
  let now = new Date();
  for (let i = 0; i < 30; i++) {
    let date = new Date(now);
    date.setDate(now.getDate() - i);
    dummy.push({
      transaction_date: date.toISOString(),
      transaction_amount: Math.abs((Math.sin(i) * 500 + Math.random() * 200).toFixed(2)), 
    });
  }
  rawData.value = dummy.reverse();
}

function groupByCategory() {
  let groupedData = {};

  rawData.value.forEach((item) => {
    let date = new Date(item.transaction_date);
    let key = "";

    if (currentCategory.value === "today") {
      key = date.toISOString().split("T")[0];
    } else if (currentCategory.value === "week") {
      key = categories.value.week[date.getDay()];
    } else if (currentCategory.value === "month") {
      key = `${date.getMonth() + 1}/${date.getDate()}`;
    } else if (currentCategory.value === "year") {
      key = categories.value.year[date.getMonth()];
    }

    if (!groupedData[key]) {
      groupedData[key] = 0;
    }
    groupedData[key] += parseFloat(item.transaction_amount);
  });

  return Object.entries(groupedData).map(([key, value]) => ({
    x: new Date(key).getTime(),
    y: value,
  }));
}

onMounted(() => {
  generateDummyData();
});

const options = computed(() => ({
  chart: {
    type: "spline",
    animation: {
      enabled: true,
    },
  },
  title: {
    text: "Transaction",
  },
  xAxis: {
    type: "datetime",
    gridLineColor: "transparent",
  },
  yAxis: {
    gridLineColor: "transparent",
    title: {
      text: "Transaction Amount",
    },
  },
  legend: {
    enabled: false,
  },
  tooltip: {
    formatter: function () {
      return `<b>${new Date(this.x).toLocaleDateString()}</b><br/>Amount: $${this.y.toFixed(2)}`;
    },
  },
  plotOptions: {
    spline: {
      marker: {
        enabled: true,
      },
      dataLabels: {
        enabled: false,
      },
      enableMouseTracking: true,
    },
  },
  series: [
    {
      name: "Transactions",
      lineWidth: 2,
      color: "rgba(29,217,93,1)",
      data: groupByCategory(),
    },
  ],
}));
</script>

<template>
  <div class="border rounded-lg p-4">
    <highchart :options="options" />
  </div>
</template>
