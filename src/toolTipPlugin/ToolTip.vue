<script setup>
import { ref, inject, onMounted, onUpdated, onUnmounted } from "vue";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css"; // Base style
import { tooltipOptionsInject } from "./index.js";

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  options: {
    type: Object,
    default: () => ({}),
  },
});

const tooltip = ref(null);

let tippyInstance = null;

function initTippy() {
  if (tippyInstance) {
    tippyInstance.setContent(props.text);
    return;
  }
  tippyInstance = tippy(tooltip.value.parentNode, {
    ...inject(tooltipOptionsInject),
    content: props.text,
    ...props.options,
  });
}

onMounted(initTippy);
onUpdated(initTippy);
onUnmounted(() => tippyInstance.destroy());
</script>

<template>
  <span ref="tooltip"></span>
</template>
