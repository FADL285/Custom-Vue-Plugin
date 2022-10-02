<script setup>
import { ref } from "vue";
const tooltipText = ref("Hello World");
</script>

<template>
  <h1>Custom Vue.js 3 Plugins</h1>
  <input class="my-2" type="text" v-model="tooltipText" /> <br />
  <span>
    Hover Over Me
    <ToolTip
      :text="tooltipText"
      :options="{ placement: 'right', animation: 'fade' }"
    />
  </span>

  <br />
  <span>
    And Me
    <ToolTip :text="tooltipText" />
  </span>
</template>
