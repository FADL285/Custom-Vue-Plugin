<script setup>
import { ref, onMounted, onUpdated, onUnmounted } from "vue";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css"; // optional for styling

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  placement: {
    type: String,
    required: false,
    default: "top",
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
    content: props.text,
    placement: props.placement,
  });
}

onMounted(initTippy);
onUpdated(initTippy);
onUnmounted(() => tippyInstance.destroy());
</script>

<template>
  <span ref="tooltip"></span>
</template>
