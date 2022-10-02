<script setup>
import { ref } from "vue";
const tooltipText = ref("Hello World");
</script>

<template>
  <h1>Custom Vue.js 3 Plugins</h1>
  <input class="my-2" type="text" v-model="tooltipText" /> <br />
  <span>
    Hover Over Me, Lorem ipsum dolor sit amet.
    <ToolTip
      :text="tooltipText"
      :options="{ placement: 'top', animation: 'fade' }"
    />
  </span>

  <br />
  <span>
    And Me
    <ToolTip :text="tooltipText" />
  </span>

  <br />

  <button class="my-2" @click="$hideAllTooltips">Hide All tooltips</button>
</template>
